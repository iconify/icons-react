import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9-f93mzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9-f93mzd"/>`,
		"fallback": "boxicons:chess-queen-filled",
	});
}

export default Component;
