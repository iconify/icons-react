import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5e_d4lum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5e_d4lum"/>`,
		"fallback": "mingcute:image-down-line",
	});
}

export default Component;
