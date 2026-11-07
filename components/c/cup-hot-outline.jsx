import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxbp-e4mk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lxbp-e4mk"/>`,
		"fallback": "solar:cup-hot-outline",
	});
}

export default Component;
