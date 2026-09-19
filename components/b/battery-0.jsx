import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_scuy04y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_scuy04y"/>`,
		"fallback": "game-icons:battery-0",
	});
}

export default Component;
