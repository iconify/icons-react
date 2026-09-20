import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/uwajf-ucs.css';
import '../../css/y/y8w8t037n.css';
import '../../css/i/isy2lrdil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="uwajf-ucs"/><path class="y8w8t037n"/><path class="isy2lrdil"/></g>`,
		"fallback": "keyline-icons:image-check-sharp-two-tone",
	});
}

export default Component;
