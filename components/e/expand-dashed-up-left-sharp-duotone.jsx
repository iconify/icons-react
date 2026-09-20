import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/s_e2iibux.css';
import '../../css/a/ani1-ubxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="s_e2iibux"/><path class="ani1-ubxv"/></g>`,
		"fallback": "keyline-icons:expand-dashed-up-left-sharp-duotone",
	});
}

export default Component;
