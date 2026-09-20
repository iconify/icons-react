import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/k936e94hp.css';
import '../../css/z/zvmy9910g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="k936e94hp"/><path class="zvmy9910g"/></g>`,
		"fallback": "keyline-icons:arrow-big-right-short-sharp-two-tone",
	});
}

export default Component;
