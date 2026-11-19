import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiu53obws.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tiu53obws"/>`,
		"fallback": "devicon:excalidraw",
	});
}

export default Component;
