import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbmn2oygh.css';

const viewBox = {"width":9,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbmn2oygh"/>`,
		"fallback": "formkit:caretright",
	});
}

export default Component;
