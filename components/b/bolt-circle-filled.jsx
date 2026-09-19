import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa863fofv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa863fofv"/>`,
		"fallback": "boxicons:bolt-circle-filled",
	});
}

export default Component;
