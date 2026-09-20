import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu-98sbyh.css';
import '../../css/k/kpvxz2bnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu-98sbyh"/><path class="kpvxz2bnb"/>`,
		"fallback": "pixel:door-open",
	});
}

export default Component;
