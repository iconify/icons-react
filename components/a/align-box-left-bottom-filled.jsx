import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gaybyzbot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gaybyzbot"/>`,
		"fallback": "tabler:align-box-left-bottom-filled",
	});
}

export default Component;
