import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2i0onb0j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2i0onb0j"/>`,
		"fallback": "game-icons:chain-lightning",
	});
}

export default Component;
