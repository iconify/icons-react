import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/om59y67-s.css';
import '../../css/h/hyyb83bqk.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/s/si3inpc3v.css';
import '../../css/i/i70bgdbfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="om59y67-s"/><path class="hyyb83bqk"/><path class="pw8f5c0fp"/><path class="si3inpc3v"/><path class="i70bgdbfl"/></g>`,
		"fallback": "solar:bluetooth-square-linear",
	});
}

export default Component;
