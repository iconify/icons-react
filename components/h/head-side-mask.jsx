import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pil_nmbqz.css';
import '../../css/y/ydj8k-bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pil_nmbqz"/><path class="ydj8k-bvg"/>`,
		"fallback": "uim:head-side-mask",
	});
}

export default Component;
