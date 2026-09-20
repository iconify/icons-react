import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otjif-b2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otjif-b2w"/>`,
		"fallback": "tabler:chess-king",
	});
}

export default Component;
