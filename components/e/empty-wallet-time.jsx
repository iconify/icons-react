import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gw28ry-jh.css';
import '../../css/e/e1gw-kwja.css';
import '../../css/g/g5_7laczp.css';
import '../../css/g/gi8pdrn9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gw28ry-jh"/><path class="e1gw-kwja"/><path class="g5_7laczp"/><path class="gi8pdrn9p"/></g>`,
		"fallback": "reicon:empty-wallet-time",
	});
}

export default Component;
