import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcibe0bub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcibe0bub"/>`,
		"fallback": "pixel:comment-solid",
	});
}

export default Component;
