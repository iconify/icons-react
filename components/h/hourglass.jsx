import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoe_m_b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zoe_m_b1i"/>`,
		"fallback": "pixelarticons:hourglass",
	});
}

export default Component;
