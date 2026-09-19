import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz58j3bxa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz58j3bxa"/>`,
		"fallback": "carbon:incident-reporter",
	});
}

export default Component;
