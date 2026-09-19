import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qilianfni.css';
import '../../css/s/s0v63acst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qilianfni"/><path class="s0v63acst"/>`,
		"fallback": "boxicons:face-child-filled",
	});
}

export default Component;
