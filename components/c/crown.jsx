import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7xpl3bro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7xpl3bro"/>`,
		"fallback": "codex:crown",
	});
}

export default Component;
