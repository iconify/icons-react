import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqtl7_d8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqtl7_d8i"/>`,
		"fallback": "boxicons:grid-row-bottom",
	});
}

export default Component;
