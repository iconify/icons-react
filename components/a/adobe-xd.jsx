import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_r8l5bww.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_r8l5bww"/>`,
		"fallback": "cib:adobe-xd",
	});
}

export default Component;
