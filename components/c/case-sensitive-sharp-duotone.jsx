import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/ju0in2s0f.css';
import '../../css/x/xuz6yn0tm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ju0in2s0f"/><path class="xuz6yn0tm"/></g>`,
		"fallback": "keyline-icons:case-sensitive-sharp-duotone",
	});
}

export default Component;
