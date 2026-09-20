import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xr6qiq71e.css';
import '../../css/z/zx34dqj3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xr6qiq71e"/><path class="zx34dqj3p"/></g>`,
		"fallback": "keyline-icons:hand-open-sharp-two-tone",
	});
}

export default Component;
