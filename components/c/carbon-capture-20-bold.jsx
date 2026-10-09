import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8xiwibfs.css';
import '../../css/f/fad7f9tkf.css';
import '../../css/n/np3f-jntl.css';
import '../../css/d/dcgjitb9o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8xiwibfs"/><path class="fad7f9tkf"/><path class="np3f-jntl"/><path class="dcgjitb9o"/>`,
		"fallback": "energy-icons:carbon-capture-20-bold",
	});
}

export default Component;
