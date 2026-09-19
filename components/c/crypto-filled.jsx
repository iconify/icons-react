import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1zn45bnx.css';
import '../../css/l/lx2u58bru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1zn45bnx"/><path class="lx2u58bru"/>`,
		"fallback": "boxicons:crypto-filled",
	});
}

export default Component;
