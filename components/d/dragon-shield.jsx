import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-u9t_bmu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-u9t_bmu"/>`,
		"fallback": "game-icons:dragon-shield",
	});
}

export default Component;
