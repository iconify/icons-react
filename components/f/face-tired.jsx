import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0espduqt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0espduqt"/>`,
		"fallback": "fa6-regular:face-tired",
	});
}

export default Component;
