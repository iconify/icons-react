import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0ooocc1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0ooocc1x"/>`,
		"fallback": "hugeicons:comment-remove-03",
	});
}

export default Component;
