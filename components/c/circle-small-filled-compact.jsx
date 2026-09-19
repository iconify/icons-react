import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhxqb1l5k.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhxqb1l5k"/>`,
		"fallback": "codicon:circle-small-filled-compact",
	});
}

export default Component;
