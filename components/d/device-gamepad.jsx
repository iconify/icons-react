import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/optm_q_ia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="optm_q_ia"/>`,
		"fallback": "tabler:device-gamepad",
	});
}

export default Component;
