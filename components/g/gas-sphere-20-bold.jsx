import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_1gyeb8r.css';
import '../../css/c/ct6m-lb4p.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_1gyeb8r"/><path class="ct6m-lb4p"/><path class="yfoxxnbix"/>`,
		"fallback": "energy-icons:gas-sphere-20-bold",
	});
}

export default Component;
