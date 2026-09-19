import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f33j-7cos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b f33j-7cos"/>`,
		"fallback": "boxicons:computer-filled",
	});
}

export default Component;
