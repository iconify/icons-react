import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig7m_j8ip.css';
import '../../css/f/f8paaybnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig7m_j8ip"/><path class="f8paaybnb"/>`,
		"fallback": "lucide-extended:book-open-check-filled",
	});
}

export default Component;
