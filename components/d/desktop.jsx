import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dupq9r-yn.css';

const viewBox = {"width":1920,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dupq9r-yn"/>`,
		"fallback": "fa:desktop",
	});
}

export default Component;
