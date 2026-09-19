import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgm8q8b-q.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgm8q8b-q"/>`,
		"fallback": "whh:brailleo",
	});
}

export default Component;
