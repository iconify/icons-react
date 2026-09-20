import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vei-fobiq.css';
import '../../css/m/mg2zvybgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vei-fobiq"/><path class="mg2zvybgd"/></g>`,
		"fallback": "keyline-icons:bird-sharp-fill",
	});
}

export default Component;
