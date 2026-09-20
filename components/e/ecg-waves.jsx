import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nudrhyb5w.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nudrhyb5w"/>`,
		"fallback": "openmoji:ecg-waves",
	});
}

export default Component;
