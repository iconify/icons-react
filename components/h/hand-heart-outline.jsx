import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbxtqyw3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kbxtqyw3g"/>`,
		"fallback": "solar:hand-heart-outline",
	});
}

export default Component;
