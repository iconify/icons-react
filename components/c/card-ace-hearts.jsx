import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us13qnh4i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us13qnh4i"/>`,
		"fallback": "game-icons:card-ace-hearts",
	});
}

export default Component;
