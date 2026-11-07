import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-vj9jbxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-vj9jbxq"/>`,
		"fallback": "solar:dumbbell-linear",
	});
}

export default Component;
