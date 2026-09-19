import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh5t2xsar.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh5t2xsar"/>`,
		"fallback": "game-icons:holy-water",
	});
}

export default Component;
