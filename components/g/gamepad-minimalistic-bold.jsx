import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb74pc30f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qb74pc30f"/>`,
		"fallback": "solar:gamepad-minimalistic-bold",
	});
}

export default Component;
