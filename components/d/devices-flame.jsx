import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sj9f2k2qh.css';
import '../../css/f/f8oewi22k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sj9f2k2qh"/><path class="f8oewi22k"/></g>`,
		"fallback": "tabler:devices-flame",
	});
}

export default Component;
