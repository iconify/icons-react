import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt5pyeboi.css';
import '../../css/n/njpxlezen.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt5pyeboi"/><path class="njpxlezen"/>`,
		"fallback": "devicon-plain:ansible",
	});
}

export default Component;
