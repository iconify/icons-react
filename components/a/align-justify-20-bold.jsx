import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qed_rfbxm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qed_rfbxm"/>`,
		"fallback": "energy-icons:align-justify-20-bold",
	});
}

export default Component;
