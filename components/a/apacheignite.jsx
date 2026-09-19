import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6cff_bij.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6cff_bij"/>`,
		"fallback": "devicon:apacheignite",
	});
}

export default Component;
