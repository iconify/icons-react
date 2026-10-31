import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tza3o2b_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tza3o2b_b"/>`,
		"fallback": "coolicons:gamepad-fill-round",
	});
}

export default Component;
