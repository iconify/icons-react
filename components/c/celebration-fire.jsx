import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy0sv1baw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy0sv1baw"/>`,
		"fallback": "game-icons:celebration-fire",
	});
}

export default Component;
