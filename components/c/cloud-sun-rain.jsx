import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qtwj46vbh.css';
import '../../css/m/mbvidv7bt.css';
import '../../css/i/ifew0xbpl.css';
import '../../css/k/kh9sagb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qtwj46vbh"/><path class="mbvidv7bt"/><path class="ifew0xbpl"/><path class="kh9sagb_t"/></g>`,
		"fallback": "iconaut:cloud-sun-rain",
	});
}

export default Component;
