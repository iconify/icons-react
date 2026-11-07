import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xvjk-cbox.css';
import '../../css/d/d7z2_7bol.css';
import '../../css/a/ahoh1r49a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xvjk-cbox"/><path class="d7z2_7bol"/><path class="ahoh1r49a"/></g>`,
		"fallback": "solar:grid-2x2-linear",
	});
}

export default Component;
