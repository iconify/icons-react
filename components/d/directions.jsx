import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwano-5_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwano-5_w"/>`,
		"fallback": "boxicons:directions",
	});
}

export default Component;
