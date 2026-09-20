import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdby753_d.css';
import '../../css/x/xqytf2l6q.css';
import '../../css/l/l3xgrcbun.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVG76xxrbfa" x1="163.5" x2="296.6" y1="185.7" y2="416.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="tdby753_d"/><stop offset=".5" class="tdby753_d"/><stop offset="1" class="xqytf2l6q"/></linearGradient></defs><path fill="url(#SVG76xxrbfa)" class="l3xgrcbun"/>`,
		"fallback": "meteocons:code-green-fill",
	});
}

export default Component;
