import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcij9pukf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcij9pukf"/>`,
		"fallback": "boxicons:arrow-up-stroke-filled",
	});
}

export default Component;
