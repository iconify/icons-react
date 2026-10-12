import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or1v_l28y.css';
import '../../css/m/mhnbjolts.css';
import '../../css/p/pfqjkwvxq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or1v_l28y"/><path class="mhnbjolts"/><path class="pfqjkwvxq"/>`,
		"fallback": "garden:headset-sparkle-stroke-20",
	});
}

export default Component;
