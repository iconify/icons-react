import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqxueobie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqxueobie"/>`,
		"fallback": "boxicons:credit-card-front-filled",
	});
}

export default Component;
