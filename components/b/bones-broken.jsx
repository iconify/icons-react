import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fdmnrgb0f.css';
import '../../css/y/yt8oais7s.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fdmnrgb0f"/><path class="yt8oais7s"/><path class="si_mtzbvj"/></g>`,
		"fallback": "solar:bones-broken",
	});
}

export default Component;
