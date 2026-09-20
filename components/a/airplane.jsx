import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hbdcg4bcq.css';
import '../../css/b/bktiry0ue.css';
import '../../css/t/tccyt80jp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hbdcg4bcq"/><path class="bktiry0ue"/><path class="tccyt80jp"/></g>`,
		"fallback": "streamline-cyber-color:airplane",
	});
}

export default Component;
