import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/riyd5ab2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="riyd5ab2l"/>`,
		"fallback": "mdi:comment-help",
	});
}

export default Component;
