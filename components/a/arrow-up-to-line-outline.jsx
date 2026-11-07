import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqe-1p3yw.css';
import '../../css/o/ohna_rbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqe-1p3yw"/><path class="ohna_rbrt"/>`,
		"fallback": "solar:arrow-up-to-line-outline",
	});
}

export default Component;
