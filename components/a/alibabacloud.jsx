import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_b_9cx1c.css';
import '../../css/i/iejop6bth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_b_9cx1c"/><path class="iejop6bth"/>`,
		"fallback": "thesvg-color:alibabacloud",
	});
}

export default Component;
