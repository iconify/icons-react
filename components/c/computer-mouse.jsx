import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-5moluoc.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-5moluoc"/>`,
		"fallback": "fa7-solid:computer-mouse",
	});
}

export default Component;
