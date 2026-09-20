import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/ws25fv4mc.css';
import '../../css/w/wvae-vf6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ws25fv4mc"/><path class="wvae-vf6j"/></g>`,
		"fallback": "lucide:camera-off",
	});
}

export default Component;
