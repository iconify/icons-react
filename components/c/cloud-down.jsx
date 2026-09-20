import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_g8aobdf.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_g8aobdf"/>`,
		"fallback": "wi:cloud-down",
	});
}

export default Component;
