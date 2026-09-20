import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zds-drrip.css';
import '../../css/p/p60zzsbrp.css';
import '../../css/i/i326cougr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zds-drrip"/><path class="p60zzsbrp"/><path class="i326cougr"/></g>`,
		"fallback": "solar:gallery-send-line-duotone",
	});
}

export default Component;
