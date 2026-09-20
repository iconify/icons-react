import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf3pscb8r.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf3pscb8r"/>`,
		"fallback": "jam:heart",
	});
}

export default Component;
