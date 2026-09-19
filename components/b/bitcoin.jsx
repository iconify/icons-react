import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l43lbubrq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l43lbubrq"/>`,
		"fallback": "fa7-brands:bitcoin",
	});
}

export default Component;
