import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhmbtiblk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhmbtiblk"/>`,
		"fallback": "pinhead:dog-wearing-harness",
	});
}

export default Component;
