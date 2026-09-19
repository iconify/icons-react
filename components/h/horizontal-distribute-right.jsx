import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d14e_qb0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d14e_qb0r"/>`,
		"fallback": "boxicons:horizontal-distribute-right",
	});
}

export default Component;
