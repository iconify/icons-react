import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9y71hblu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9y71hblu"/>`,
		"fallback": "fa7-brands:ello",
	});
}

export default Component;
