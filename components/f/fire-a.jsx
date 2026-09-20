import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wv2uvhbbx.css';
import '../../css/i/intwrhbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wv2uvhbbx"/><path class="intwrhbnr"/></g>`,
		"fallback": "mage:fire-a",
	});
}

export default Component;
