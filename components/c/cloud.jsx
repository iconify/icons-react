import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk2_vebjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk2_vebjt"/>`,
		"fallback": "boxicons:cloud",
	});
}

export default Component;
