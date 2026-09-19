import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4tob8bkg.css';
import '../../css/p/p4bqiyolx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4tob8bkg"/><path class="p4bqiyolx"/>`,
		"fallback": "ion:home-outline",
	});
}

export default Component;
