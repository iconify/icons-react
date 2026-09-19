import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_cc7qb8p.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_cc7qb8p"/>`,
		"fallback": "whh:heart",
	});
}

export default Component;
