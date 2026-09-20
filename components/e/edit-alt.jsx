import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-1o1p8mn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-1o1p8mn"/>`,
		"fallback": "uil:edit-alt",
	});
}

export default Component;
