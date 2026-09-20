import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc6ytf2nz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc6ytf2nz"/>`,
		"fallback": "ix:audio-description2",
	});
}

export default Component;
