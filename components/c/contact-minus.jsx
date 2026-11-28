import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnq8786rd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnq8786rd"/>`,
		"fallback": "noviair:contact-minus",
	});
}

export default Component;
