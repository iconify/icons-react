import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc-n21bez.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc-n21bez"/>`,
		"fallback": "devicon:helm",
	});
}

export default Component;
