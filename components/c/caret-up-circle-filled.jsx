import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a99y_q_qy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a99y_q_qy"/>`,
		"fallback": "boxicons:caret-up-circle-filled",
	});
}

export default Component;
