import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mod8-fprh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mod8-fprh"/>`,
		"fallback": "fa6-solid:earth-asia",
	});
}

export default Component;
