import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr6shkb4z.css';
import '../../css/p/p11_xsbtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr6shkb4z"/><path class="p11_xsbtc"/>`,
		"fallback": "boxicons:ghost",
	});
}

export default Component;
