import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_v47x3vh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_v47x3vh"/>`,
		"fallback": "devicon:filamentphp",
	});
}

export default Component;
