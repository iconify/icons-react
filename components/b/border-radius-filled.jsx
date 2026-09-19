import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn1_y7b8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn1_y7b8s"/>`,
		"fallback": "boxicons:border-radius-filled",
	});
}

export default Component;
