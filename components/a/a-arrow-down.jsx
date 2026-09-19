import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yddqc0brq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yddqc0brq"/>`,
		"fallback": "hugeicons:a-arrow-down",
	});
}

export default Component;
