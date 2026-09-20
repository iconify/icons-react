import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbv2_w84w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbv2_w84w"/>`,
		"fallback": "simple-icons:badoo",
	});
}

export default Component;
