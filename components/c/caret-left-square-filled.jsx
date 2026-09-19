import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1is9vb2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1is9vb2p"/>`,
		"fallback": "boxicons:caret-left-square-filled",
	});
}

export default Component;
