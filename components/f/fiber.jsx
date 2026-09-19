import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee-uncc2s.css';
import '../../css/z/z33pz2bcc.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee-uncc2s"/><path class="z33pz2bcc"/>`,
		"fallback": "devicon:fiber",
	});
}

export default Component;
