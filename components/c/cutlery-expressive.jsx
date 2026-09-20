import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7el2-bsl.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7el2-bsl"/>`,
		"fallback": "nrk:cutlery-expressive",
	});
}

export default Component;
