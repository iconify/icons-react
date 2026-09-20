import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy1m_pe3c.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy1m_pe3c"/>`,
		"fallback": "jam:chevrons-square-up-left",
	});
}

export default Component;
