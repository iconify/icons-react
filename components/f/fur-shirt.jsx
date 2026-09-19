import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly5--pdrk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly5--pdrk"/>`,
		"fallback": "game-icons:fur-shirt",
	});
}

export default Component;
