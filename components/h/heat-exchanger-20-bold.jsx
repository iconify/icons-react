import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewxalfyww.css';
import '../../css/j/jxwwvvbjb.css';
import '../../css/t/tp0bwlbkf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewxalfyww"/><path class="jxwwvvbjb"/><path class="tp0bwlbkf"/>`,
		"fallback": "energy-icons:heat-exchanger-20-bold",
	});
}

export default Component;
