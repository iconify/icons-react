import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh25mva7m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mh25mva7m"/>`,
		"fallback": "cil:dinner",
	});
}

export default Component;
