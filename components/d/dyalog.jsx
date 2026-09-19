import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhch32bdw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhch32bdw"/>`,
		"fallback": "devicon-plain:dyalog",
	});
}

export default Component;
