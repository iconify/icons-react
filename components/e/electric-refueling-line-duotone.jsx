import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yfy6f9w0h.css';
import '../../css/k/kzep6cbwm.css';
import '../../css/w/wu-2fgbxv.css';
import '../../css/l/lgb5zeffk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yfy6f9w0h"/><path class="kzep6cbwm"/><path class="wu-2fgbxv"/><path class="lgb5zeffk"/></g>`,
		"fallback": "solar:electric-refueling-line-duotone",
	});
}

export default Component;
