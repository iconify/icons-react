import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/oireozd_x.css';
import '../../css/n/nb97cocfb.css';
import '../../css/s/sp3ujwwyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="oireozd_x"/><path class="nb97cocfb"/><path class="sp3ujwwyq"/></g>`,
		"fallback": "keyline-icons:bot-sharp-duotone",
	});
}

export default Component;
