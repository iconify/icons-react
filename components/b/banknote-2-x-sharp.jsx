import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u970n0bqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u970n0bqs"/>`,
		"fallback": "keyline-icons:banknote-2-x-sharp",
	});
}

export default Component;
