import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/n067cabcj.css';
import '../../css/s/snibgdcaa.css';
import '../../css/v/vqjoaw6-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="n067cabcj"/><path class="snibgdcaa"/><path class="vqjoaw6-f"/></g>`,
		"fallback": "keyline-icons:clock-sparkles-sharp-duotone",
	});
}

export default Component;
