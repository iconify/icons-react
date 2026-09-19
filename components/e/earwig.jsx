import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dye_bny7k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dye_bny7k"/>`,
		"fallback": "game-icons:earwig",
	});
}

export default Component;
