import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6kt_2byq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6kt_2byq"/>`,
		"fallback": "boxicons:camera-switch-filled",
	});
}

export default Component;
