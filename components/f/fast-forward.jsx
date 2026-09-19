import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjbibb21a.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjbibb21a"/>`,
		"fallback": "foundation:fast-forward",
	});
}

export default Component;
