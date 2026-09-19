import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb-_lcbdx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb-_lcbdx"/>`,
		"fallback": "cryptocurrency:html",
	});
}

export default Component;
