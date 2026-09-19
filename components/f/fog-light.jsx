import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnj8a2e8a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnj8a2e8a"/>`,
		"fallback": "game-icons:fog-light",
	});
}

export default Component;
