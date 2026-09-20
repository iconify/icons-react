import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_xu-1bpm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_xu-1bpm"/>`,
		"fallback": "radix-icons:double-arrow-up",
	});
}

export default Component;
