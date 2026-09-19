import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef14_207f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef14_207f"/>`,
		"fallback": "game-icons:champagne-cork",
	});
}

export default Component;
