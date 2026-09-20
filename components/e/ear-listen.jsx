import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuw37nb-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuw37nb-b"/>`,
		"fallback": "keyline-icons:ear-listen",
	});
}

export default Component;
