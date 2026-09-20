import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj8-3m_yb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj8-3m_yb"/>`,
		"fallback": "lucide:bone-fracture",
	});
}

export default Component;
