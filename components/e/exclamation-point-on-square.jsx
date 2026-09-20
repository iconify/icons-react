import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdri55zjs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdri55zjs"/>`,
		"fallback": "pinhead:exclamation-point-on-square",
	});
}

export default Component;
