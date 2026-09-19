import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_prz6bcd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_prz6bcd"/>`,
		"fallback": "game-icons:elephant-head",
	});
}

export default Component;
