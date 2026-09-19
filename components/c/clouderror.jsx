import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oib75js9l.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oib75js9l"/>`,
		"fallback": "whh:clouderror",
	});
}

export default Component;
