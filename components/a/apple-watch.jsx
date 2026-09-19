import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzkgl3j1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bzkgl3j1w"/>`,
		"fallback": "gg:apple-watch",
	});
}

export default Component;
