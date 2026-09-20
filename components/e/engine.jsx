import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f252ndbns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f252ndbns"/>`,
		"fallback": "tabler:engine",
	});
}

export default Component;
