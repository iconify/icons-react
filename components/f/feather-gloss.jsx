import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruyq0rjxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruyq0rjxn"/>`,
		"fallback": "withicons:feather-gloss",
	});
}

export default Component;
