import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn_e35btc.css';
import '../../css/v/vtfwic-qn.css';
import '../../css/u/uqlamj4tr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn_e35btc"/><path class="vtfwic-qn"/><circle class="uqlamj4tr"/>`,
		"fallback": "eva:hard-drive-outline",
	});
}

export default Component;
