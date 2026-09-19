import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntn03pnxs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntn03pnxs"/>`,
		"fallback": "famicons:desktop-sharp",
	});
}

export default Component;
