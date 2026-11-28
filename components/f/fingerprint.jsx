import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki_1ns98y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki_1ns98y"/>`,
		"fallback": "noviair:fingerprint",
	});
}

export default Component;
