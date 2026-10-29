import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gzjffcpzq.css';
import '../../css/r/rwh3knbhs.css';
import '../../css/p/p81j7dbae.css';
import '../../css/x/xck8kdj3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gzjffcpzq wm-k"/><path class="rwh3knbhs wm-shadow"/><path class="p81j7dbae wm-k"/><path class="wm-a xck8kdj3v"/></g>`,
		"fallback": "withicons:chess-engrave",
	});
}

export default Component;
