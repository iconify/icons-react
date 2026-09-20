import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxea29b2x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxea29b2x"/>`,
		"fallback": "streamline:cake-slice",
	});
}

export default Component;
