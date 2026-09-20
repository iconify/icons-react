import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc1ttrbif.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc1ttrbif"/>`,
		"fallback": "streamline:google-drive",
	});
}

export default Component;
