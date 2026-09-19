import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zytnknbqy.css';
import '../../css/h/hxrdmob8v.css';
import '../../css/j/j1_yf7_6k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zytnknbqy"/><path class="hxrdmob8v"/><path class="j1_yf7_6k"/>`,
		"fallback": "flat-color-icons:factory-breakdown",
	});
}

export default Component;
