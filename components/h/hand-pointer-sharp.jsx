import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2m_kp2fl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2m_kp2fl"/>`,
		"fallback": "keyline-icons:hand-pointer-sharp",
	});
}

export default Component;
