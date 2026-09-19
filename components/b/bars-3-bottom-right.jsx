import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_k2hhb_e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m_k2hhb_e"/>`,
		"fallback": "heroicons-solid:bars-3-bottom-right",
	});
}

export default Component;
