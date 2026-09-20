import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/r/rcdawhb0x.css';
import '../../css/n/nw4q19_ui.css';
import '../../css/g/gkfk6p_mj.css';
import '../../css/n/n83h8tu7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="rcdawhb0x"/><path class="nw4q19_ui"/><path class="gkfk6p_mj"/><path class="n83h8tu7y"/></g>`,
		"fallback": "solar:clapperboard-play-linear",
	});
}

export default Component;
