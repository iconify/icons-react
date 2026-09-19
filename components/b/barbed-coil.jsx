import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxoud4tuw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxoud4tuw"/>`,
		"fallback": "game-icons:barbed-coil",
	});
}

export default Component;
