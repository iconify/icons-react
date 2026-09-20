import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/eizv67msc.css';
import '../../css/m/malq_6hbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="eizv67msc"/><path class="malq_6hbf"/></g>`,
		"fallback": "keyline-icons:circle-progress-play-sharp-fill",
	});
}

export default Component;
