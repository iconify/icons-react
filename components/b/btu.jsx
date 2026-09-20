import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzsxfebud.css';
import '../../css/f/fmy9nacam.css';
import '../../css/f/fyqrbo7td.css';
import '../../css/d/dtzs14bot.css';
import '../../css/u/ur6v5_b8c.css';
import '../../css/b/bqiwrx_sw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzsxfebud"/><path class="fmy9nacam"/><path class="fyqrbo7td"/><path class="dtzs14bot"/><path class="ur6v5_b8c"/><path class="bqiwrx_sw"/>`,
		"fallback": "token:btu",
	});
}

export default Component;
