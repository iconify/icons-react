import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfnyw7bht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfnyw7bht"/>`,
		"fallback": "boxicons:fan-filled",
	});
}

export default Component;
