import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i39v-mbex.css';
import '../../css/e/e4k17xbts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i39v-mbex"/><path class="e4k17xbts"/></g>`,
		"fallback": "mage:cup-hot",
	});
}

export default Component;
