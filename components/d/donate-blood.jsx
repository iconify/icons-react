import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhcn3lz6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhcn3lz6n"/>`,
		"fallback": "bx:donate-blood",
	});
}

export default Component;
