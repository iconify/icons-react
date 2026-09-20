import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iep4jyacq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iep4jyacq"/>`,
		"fallback": "solar:book-minimalistic-outline",
	});
}

export default Component;
