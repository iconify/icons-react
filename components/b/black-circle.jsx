import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcz0i0b6y.css';
import '../../css/b/b3uq48bmq.css';
import '../../css/c/clgcxl7va.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcz0i0b6y"/><path class="b3uq48bmq"/><path class="clgcxl7va"/>`,
		"fallback": "openmoji:black-circle",
	});
}

export default Component;
