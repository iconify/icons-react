import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/snto2-zvc.css';
import '../../css/k/kpz-ky14l.css';
import '../../css/z/zn-yurbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="snto2-zvc"/><path class="kpz-ky14l"/><path class="zn-yurbog"/></g>`,
		"fallback": "solar:chat-round-warning-linear",
	});
}

export default Component;
