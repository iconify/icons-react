import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r8ksu0s_d.css';
import '../../css/x/xx-_idbnk.css';
import '../../css/q/qokg58j2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r8ksu0s_d"/><path class="xx-_idbnk"/><path class="qokg58j2s"/></g>`,
		"fallback": "mage:download",
	});
}

export default Component;
