import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drhd_vrgu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drhd_vrgu"/>`,
		"fallback": "devicon:carbon",
	});
}

export default Component;
