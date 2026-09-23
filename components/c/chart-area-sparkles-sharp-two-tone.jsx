import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/q0ankg4uz.css';
import '../../css/g/gri0ybjpd.css';
import '../../css/y/yb8pm2b6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="q0ankg4uz"/><path class="gri0ybjpd"/><path class="yb8pm2b6m"/></g>`,
		"fallback": "keyline-icons:chart-area-sparkles-sharp-two-tone",
	});
}

export default Component;
