import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf0z39bmd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf0z39bmd"/>`,
		"fallback": "game-icons:house-keys",
	});
}

export default Component;
