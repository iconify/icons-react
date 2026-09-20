import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni4yygb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni4yygb7d"/>`,
		"fallback": "tabler:chess-filled",
	});
}

export default Component;
