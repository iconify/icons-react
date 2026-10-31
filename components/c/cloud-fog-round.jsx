import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2m_4_bbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2m_4_bbc"/>`,
		"fallback": "coolicons:cloud-fog-round",
	});
}

export default Component;
