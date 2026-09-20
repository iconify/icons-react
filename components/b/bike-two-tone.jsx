import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t0e2nkp4h.css';
import '../../css/y/y71l96bhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t0e2nkp4h"/><path class="y71l96bhq"/></g>`,
		"fallback": "keyline-icons:bike-two-tone",
	});
}

export default Component;
