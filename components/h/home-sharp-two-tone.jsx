import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/a8eameb9p.css';
import '../../css/k/kvj129bvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="a8eameb9p"/><path class="kvj129bvx"/></g>`,
		"fallback": "keyline-icons:home-sharp-two-tone",
	});
}

export default Component;
