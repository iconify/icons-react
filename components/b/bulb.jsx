import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn5gmacvf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn5gmacvf"/>`,
		"fallback": "ix:bulb",
	});
}

export default Component;
