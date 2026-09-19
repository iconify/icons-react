import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7xw2l-ms.css';
import '../../css/v/vp3r9_80y.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7xw2l-ms"/><path class="vp3r9_80y"/>`,
		"fallback": "devicon:htmx",
	});
}

export default Component;
