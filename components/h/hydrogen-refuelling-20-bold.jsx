import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pskk51bhe.css';
import '../../css/a/a23a_oamq.css';
import '../../css/m/mx-3s0wlz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pskk51bhe"/><path class="a23a_oamq"/><path class="mx-3s0wlz"/>`,
		"fallback": "energy-icons:hydrogen-refuelling-20-bold",
	});
}

export default Component;
