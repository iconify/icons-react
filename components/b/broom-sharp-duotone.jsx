import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/u_4q2gbhg.css';
import '../../css/t/twehkxkcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="u_4q2gbhg"/><path class="twehkxkcy"/></g>`,
		"fallback": "keyline-icons:broom-sharp-duotone",
	});
}

export default Component;
