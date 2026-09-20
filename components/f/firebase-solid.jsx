import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsx3oj1sf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsx3oj1sf"/>`,
		"fallback": "teenyicons:firebase-solid",
	});
}

export default Component;
