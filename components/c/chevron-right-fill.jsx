import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc2hi3nnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc2hi3nnq"/>`,
		"fallback": "eva:chevron-right-fill",
	});
}

export default Component;
