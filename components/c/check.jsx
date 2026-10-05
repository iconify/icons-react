import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_z85b1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz_z85b1q"/>`,
		"fallback": "matita:check",
	});
}

export default Component;
