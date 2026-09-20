import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncrj0nj_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncrj0nj_b"/>`,
		"fallback": "streamline-ultimate:check-bold",
	});
}

export default Component;
