import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctvcq8x9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctvcq8x9v"/>`,
		"fallback": "tabler:cloud-heart",
	});
}

export default Component;
