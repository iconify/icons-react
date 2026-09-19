import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_b9l1byf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_b9l1byf"/>`,
		"fallback": "cib:amd",
	});
}

export default Component;
