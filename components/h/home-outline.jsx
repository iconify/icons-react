import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr1m_4c0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr1m_4c0m"/>`,
		"fallback": "bitcoin-icons:home-outline",
	});
}

export default Component;
