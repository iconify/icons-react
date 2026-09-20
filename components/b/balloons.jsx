import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij0l8rbhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij0l8rbhq"/>`,
		"fallback": "lineicons:balloons",
	});
}

export default Component;
