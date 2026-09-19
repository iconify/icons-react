import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trm71o2xf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trm71o2xf"/>`,
		"fallback": "file-icons:docpad",
	});
}

export default Component;
