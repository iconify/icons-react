import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ie7-rmbwb.css';
import '../../css/x/xz-w_6buo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ie7-rmbwb"/><path class="xz-w_6buo"/></g>`,
		"fallback": "keyline-icons:arrow-down-wide-narrow-duotone",
	});
}

export default Component;
