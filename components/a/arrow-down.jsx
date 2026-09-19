import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_ugq-blr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_ugq-blr"/>`,
		"fallback": "akar-icons:arrow-down",
	});
}

export default Component;
