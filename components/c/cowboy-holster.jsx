import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7jdv5g2w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7jdv5g2w"/>`,
		"fallback": "game-icons:cowboy-holster",
	});
}

export default Component;
