import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_wb8jbdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d_wb8jbdp"/>`,
		"fallback": "solar:hiking-minimalistic-outline",
	});
}

export default Component;
