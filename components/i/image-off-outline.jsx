import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxrfocm_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxrfocm_b"/>`,
		"fallback": "mdi:image-off-outline",
	});
}

export default Component;
