import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrbimylqd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrbimylqd"/>`,
		"fallback": "fa7-solid:hard-hat",
	});
}

export default Component;
