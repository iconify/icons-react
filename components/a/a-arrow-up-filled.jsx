import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyzm1ebos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyzm1ebos"/>`,
		"fallback": "boxicons:a-arrow-up-filled",
	});
}

export default Component;
