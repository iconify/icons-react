import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjlhq0b_f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjlhq0b_f"/>`,
		"fallback": "game-icons:bloody-sword",
	});
}

export default Component;
