import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs1j0v5_d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs1j0v5_d"/>`,
		"fallback": "game-icons:dumpling",
	});
}

export default Component;
