import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c06-m_bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c06-m_bfm"/>`,
		"fallback": "mingcute:cube-3d-fill",
	});
}

export default Component;
