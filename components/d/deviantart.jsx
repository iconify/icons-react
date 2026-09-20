import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8yer9j0r.css';

const viewBox = {"width":24,"height":24,"left":-5.5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8yer9j0r"/>`,
		"fallback": "jam:deviantart",
	});
}

export default Component;
