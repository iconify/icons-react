import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mns0wob5x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mns0wob5x"/>`,
		"fallback": "game-icons:bolter-gun",
	});
}

export default Component;
