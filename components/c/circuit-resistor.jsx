import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp3_k5mkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp3_k5mkg"/>`,
		"fallback": "tabler:circuit-resistor",
	});
}

export default Component;
