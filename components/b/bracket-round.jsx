import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf2sv9bxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf2sv9bxh"/>`,
		"fallback": "boxicons:bracket-round",
	});
}

export default Component;
