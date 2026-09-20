import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lwhz2cczu.css';
import '../../css/w/w37vsy7dz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="lwhz2cczu"/><path class="w37vsy7dz"/></g>`,
		"fallback": "keyline-icons:fast-forward-sharp-two-tone",
	});
}

export default Component;
