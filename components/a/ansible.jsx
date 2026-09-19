import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inma3mwja.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inma3mwja"/>`,
		"fallback": "cib:ansible",
	});
}

export default Component;
