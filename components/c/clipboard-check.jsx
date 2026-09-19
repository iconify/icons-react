import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t36m_jbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t36m_jbyh"/>`,
		"fallback": "heroicons-outline:clipboard-check",
	});
}

export default Component;
