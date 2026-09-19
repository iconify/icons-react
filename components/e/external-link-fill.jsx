import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2b_x2s3y.css';
import '../../css/c/cu9m93g4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2b_x2s3y"/><path class="cu9m93g4u"/>`,
		"fallback": "eva:external-link-fill",
	});
}

export default Component;
