import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct7v-bboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct7v-bboa"/>`,
		"fallback": "keyline-icons:equal-approximately-sharp",
	});
}

export default Component;
