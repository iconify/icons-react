import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abw1ukz-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abw1ukz-q"/>`,
		"fallback": "keyline-icons:grid-squares-sharp-duotone",
	});
}

export default Component;
