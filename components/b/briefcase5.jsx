import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8z8m_b8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h8z8m_b8w"/>`,
		"fallback": "reicon:briefcase5",
	});
}

export default Component;
