import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdrk0t4mo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdrk0t4mo"/>`,
		"fallback": "selfhst:fromkai-light",
	});
}

export default Component;
