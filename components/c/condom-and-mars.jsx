import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7o1llbcs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7o1llbcs"/>`,
		"fallback": "pinhead:condom-and-mars",
	});
}

export default Component;
