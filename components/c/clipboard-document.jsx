import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8_m_nb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8_m_nb0l"/>`,
		"fallback": "heroicons:clipboard-document",
	});
}

export default Component;
