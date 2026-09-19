import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo25m_tbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo25m_tbu"/>`,
		"fallback": "hugeicons:constellation",
	});
}

export default Component;
