import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzh9j_86w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzh9j_86w"/>`,
		"fallback": "eva:heart-fill",
	});
}

export default Component;
