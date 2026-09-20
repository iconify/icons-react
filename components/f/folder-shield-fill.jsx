import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gel_m_b1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gel_m_b1s"/>`,
		"fallback": "ri:folder-shield-fill",
	});
}

export default Component;
