import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo6cfv3dq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo6cfv3dq"/>`,
		"fallback": "mingcute:hammer-line",
	});
}

export default Component;
