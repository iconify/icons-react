import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/tyv81fb_p.css';
import '../../css/w/w3giaacrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="tyv81fb_p"/><path class="w3giaacrl"/></g>`,
		"fallback": "keyline-icons:compass-sharp-duotone",
	});
}

export default Component;
