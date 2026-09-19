import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpfudxb7d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpfudxb7d"/>`,
		"fallback": "ps:download",
	});
}

export default Component;
