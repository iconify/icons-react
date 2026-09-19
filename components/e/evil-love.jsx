import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc1bpgixu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc1bpgixu"/>`,
		"fallback": "game-icons:evil-love",
	});
}

export default Component;
