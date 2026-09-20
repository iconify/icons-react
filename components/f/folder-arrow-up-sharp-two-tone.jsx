import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hskg5cwll.css';
import '../../css/d/dae_7s_yq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hskg5cwll"/><path class="dae_7s_yq"/></g>`,
		"fallback": "keyline-icons:folder-arrow-up-sharp-two-tone",
	});
}

export default Component;
