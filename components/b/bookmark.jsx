import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp_wurbut.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp_wurbut"/>`,
		"fallback": "whh:bookmark",
	});
}

export default Component;
