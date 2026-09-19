import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk_tm6ard.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tk_tm6ard"/>`,
		"fallback": "dinkie-icons:input-latin-lower-letters",
	});
}

export default Component;
