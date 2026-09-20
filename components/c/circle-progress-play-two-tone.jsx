import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jefko1b_v.css';
import '../../css/h/hc5d41b9j.css';
import '../../css/a/a483nz4oq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jefko1b_v"/><path class="hc5d41b9j"/><path class="a483nz4oq"/></g>`,
		"fallback": "keyline-icons:circle-progress-play-two-tone",
	});
}

export default Component;
