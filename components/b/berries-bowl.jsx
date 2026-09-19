import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_s6b-ete.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_s6b-ete"/>`,
		"fallback": "game-icons:berries-bowl",
	});
}

export default Component;
