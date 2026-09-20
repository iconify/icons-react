import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyioyxu9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyioyxu9s"/>`,
		"fallback": "uim:adobe-alt",
	});
}

export default Component;
