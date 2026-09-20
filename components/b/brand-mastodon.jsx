import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f7n26h7yd.css';
import '../../css/v/vq1ro5v7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f7n26h7yd"/><path class="vq1ro5v7a"/></g>`,
		"fallback": "tabler:brand-mastodon",
	});
}

export default Component;
