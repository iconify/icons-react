import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxa-w1bls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxa-w1bls"/>`,
		"fallback": "ri:home-office-line",
	});
}

export default Component;
