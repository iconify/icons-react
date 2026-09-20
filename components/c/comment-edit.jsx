import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukc__5m7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukc__5m7u"/>`,
		"fallback": "uil:comment-edit",
	});
}

export default Component;
