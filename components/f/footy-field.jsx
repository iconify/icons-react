import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlg952n0i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlg952n0i"/>`,
		"fallback": "game-icons:footy-field",
	});
}

export default Component;
