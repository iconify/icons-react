import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxff9dbdy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxff9dbdy"/>`,
		"fallback": "game-icons:bathtub",
	});
}

export default Component;
