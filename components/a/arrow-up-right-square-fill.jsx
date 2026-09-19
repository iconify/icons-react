import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsjqdebvs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsjqdebvs"/>`,
		"fallback": "bi:arrow-up-right-square-fill",
	});
}

export default Component;
