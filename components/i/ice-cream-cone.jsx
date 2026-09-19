import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghpm_5bwp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghpm_5bwp"/>`,
		"fallback": "game-icons:ice-cream-cone",
	});
}

export default Component;
