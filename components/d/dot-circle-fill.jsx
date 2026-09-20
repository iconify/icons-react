import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iky8m_bqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iky8m_bqi"/>`,
		"fallback": "mingcute:dot-circle-fill",
	});
}

export default Component;
