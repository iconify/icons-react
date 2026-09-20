import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/doy9q4b5f.css';
import '../../css/s/srxr8c13n.css';
import '../../css/i/iloc7qlea.css';
import '../../css/q/qhkpc2vdh.css';
import '../../css/x/x6iuzrmkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="doy9q4b5f"/><path class="srxr8c13n"/><path class="iloc7qlea"/><path class="qhkpc2vdh"/><path class="x6iuzrmkz"/></g>`,
		"fallback": "solar:accessibility-line-duotone",
	});
}

export default Component;
