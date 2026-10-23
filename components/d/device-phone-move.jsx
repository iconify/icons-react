import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ia7jq9hag.css';
import '../../css/g/gq3dk_bzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ia7jq9hag"/><path class="gq3dk_bzb"/></g>`,
		"fallback": "andrsrxn:device-phone-move",
	});
}

export default Component;
