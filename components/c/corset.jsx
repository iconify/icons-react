import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6l_umb3t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6l_umb3t"/>`,
		"fallback": "game-icons:corset",
	});
}

export default Component;
