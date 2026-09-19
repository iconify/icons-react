import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3i53ob8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3i53ob8d"/>`,
		"fallback": "gridicons:bug",
	});
}

export default Component;
