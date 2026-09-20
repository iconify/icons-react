import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z25xg7b5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z25xg7b5x"/>`,
		"fallback": "lucide:chess-bishop",
	});
}

export default Component;
