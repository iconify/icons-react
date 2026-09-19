import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk-ct9y_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk-ct9y_b"/>`,
		"fallback": "eva:alert-circle-fill",
	});
}

export default Component;
