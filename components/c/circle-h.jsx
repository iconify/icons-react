import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1h353i9r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1h353i9r"/>`,
		"fallback": "fa6-solid:circle-h",
	});
}

export default Component;
