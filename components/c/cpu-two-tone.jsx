import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fehbssbve.css';
import '../../css/w/wccyhwb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fehbssbve"/><path class="wccyhwb9d"/></g>`,
		"fallback": "keyline-icons:cpu-two-tone",
	});
}

export default Component;
