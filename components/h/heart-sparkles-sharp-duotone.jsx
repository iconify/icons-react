import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zwd3a68ww.css';
import '../../css/q/qz4hw_hri.css';
import '../../css/h/h2gye8b5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="zwd3a68ww"/><path class="qz4hw_hri"/><path class="h2gye8b5v"/></g>`,
		"fallback": "keyline-icons:heart-sparkles-sharp-duotone",
	});
}

export default Component;
