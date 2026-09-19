import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h18a-pf2x.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h18a-pf2x"/>`,
		"fallback": "fa-brands:github",
	});
}

export default Component;
