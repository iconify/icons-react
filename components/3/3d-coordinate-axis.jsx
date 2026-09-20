import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nomj558xa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nomj558xa"/>`,
		"fallback": "streamline-flex:3d-coordinate-axis",
	});
}

export default Component;
