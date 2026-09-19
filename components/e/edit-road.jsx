import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp0m_8bdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp0m_8bdo"/>`,
		"fallback": "hugeicons:edit-road",
	});
}

export default Component;
