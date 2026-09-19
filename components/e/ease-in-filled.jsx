import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjh1g7rma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjh1g7rma"/>`,
		"fallback": "boxicons:ease-in-filled",
	});
}

export default Component;
