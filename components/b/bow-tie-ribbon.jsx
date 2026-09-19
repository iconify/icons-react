import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj7o5x-om.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj7o5x-om"/>`,
		"fallback": "game-icons:bow-tie-ribbon",
	});
}

export default Component;
