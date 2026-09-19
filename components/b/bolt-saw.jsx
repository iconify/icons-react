import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpo_vky9n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpo_vky9n"/>`,
		"fallback": "game-icons:bolt-saw",
	});
}

export default Component;
