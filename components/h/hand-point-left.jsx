import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4aagl8dr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4aagl8dr"/>`,
		"fallback": "fa7-solid:hand-point-left",
	});
}

export default Component;
