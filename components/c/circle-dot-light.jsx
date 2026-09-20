import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1k_fi90e.css';
import '../../css/l/ly7yqvbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1k_fi90e"/><path class="ly7yqvbmm"/>`,
		"fallback": "stash:circle-dot-light",
	});
}

export default Component;
