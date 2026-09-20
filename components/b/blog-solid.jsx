import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7r80m_dn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7r80m_dn"/>`,
		"fallback": "la:blog-solid",
	});
}

export default Component;
