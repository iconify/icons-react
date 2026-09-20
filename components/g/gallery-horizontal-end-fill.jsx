import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ym2fiubju.css';
import '../../css/p/p_ubm5blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ym2fiubju"/><path class="p_ubm5blj"/></g>`,
		"fallback": "keyline-icons:gallery-horizontal-end-fill",
	});
}

export default Component;
