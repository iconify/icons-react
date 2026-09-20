import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8ay7nb3q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h8ay7nb3q"/>`,
		"fallback": "streamline:fragile-remix",
	});
}

export default Component;
