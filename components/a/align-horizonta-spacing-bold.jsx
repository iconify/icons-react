import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqlxk4byx.css';
import '../../css/g/gxoky2bds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nqlxk4byx"/><path class="gxoky2bds"/>`,
		"fallback": "solar:align-horizonta-spacing-bold",
	});
}

export default Component;
