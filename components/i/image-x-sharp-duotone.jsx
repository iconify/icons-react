import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/uwajf-ucs.css';
import '../../css/q/q6ucdv7yv.css';
import '../../css/i/isy2lrdil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="uwajf-ucs"/><path class="q6ucdv7yv"/><path class="isy2lrdil"/></g>`,
		"fallback": "keyline-icons:image-x-sharp-duotone",
	});
}

export default Component;
