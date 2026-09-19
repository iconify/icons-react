import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0n773bbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0n773bbi"/>`,
		"fallback": "hugeicons:arrow-left-01",
	});
}

export default Component;
