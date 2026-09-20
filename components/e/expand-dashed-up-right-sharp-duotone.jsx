import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vam4psdav.css';
import '../../css/h/hwukxflcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vam4psdav"/><path class="hwukxflcq"/></g>`,
		"fallback": "keyline-icons:expand-dashed-up-right-sharp-duotone",
	});
}

export default Component;
