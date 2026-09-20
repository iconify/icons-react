import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjg8m-bin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjg8m-bin"/>`,
		"fallback": "lineicons:android",
	});
}

export default Component;
