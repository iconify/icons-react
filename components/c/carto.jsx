import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1m_ek77t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1m_ek77t"/>`,
		"fallback": "simple-icons:carto",
	});
}

export default Component;
