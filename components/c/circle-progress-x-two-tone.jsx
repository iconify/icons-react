import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hc5d41b9j.css';
import '../../css/o/o37f2gbww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hc5d41b9j"/><path class="o37f2gbww"/></g>`,
		"fallback": "keyline-icons:circle-progress-x-two-tone",
	});
}

export default Component;
