import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/ns69e1t-d.css';
import '../../css/b/bpv-z28ia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ns69e1t-d"/><path class="bpv-z28ia"/></g>`,
		"fallback": "keyline-icons:door-open-sharp-two-tone",
	});
}

export default Component;
