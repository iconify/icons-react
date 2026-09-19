import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prtio_bhi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prtio_bhi"/>`,
		"fallback": "game-icons:beehive",
	});
}

export default Component;
