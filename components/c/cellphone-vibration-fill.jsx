import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyu8w6b7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyu8w6b7d"/>`,
		"fallback": "mingcute:cellphone-vibration-fill",
	});
}

export default Component;
