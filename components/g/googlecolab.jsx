import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4q4o7bdo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4q4o7bdo"/>`,
		"fallback": "devicon-plain:googlecolab",
	});
}

export default Component;
