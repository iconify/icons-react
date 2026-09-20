import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e71r7tbyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e71r7tbyq"/>`,
		"fallback": "reicon:archive-up-filled",
	});
}

export default Component;
