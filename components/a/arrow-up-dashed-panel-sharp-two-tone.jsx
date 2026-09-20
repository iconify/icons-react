import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jrdz-v_np.css';
import '../../css/a/aq4_ovb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="jrdz-v_np"/><path class="aq4_ovb5p"/></g>`,
		"fallback": "keyline-icons:arrow-up-dashed-panel-sharp-two-tone",
	});
}

export default Component;
