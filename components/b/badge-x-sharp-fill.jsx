import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_25lpb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m_25lpb-c"/>`,
		"fallback": "keyline-icons:badge-x-sharp-fill",
	});
}

export default Component;
