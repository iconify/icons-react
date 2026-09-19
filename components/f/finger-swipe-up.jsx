import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvp6zsbrb.css';
import '../../css/b/bv-ekvb3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvp6zsbrb"/><path class="bv-ekvb3r"/>`,
		"fallback": "boxicons:finger-swipe-up",
	});
}

export default Component;
