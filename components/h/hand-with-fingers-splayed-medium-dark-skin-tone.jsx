import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7_5d9ber.css';
import '../../css/a/acwejz0_o.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7_5d9ber"/><path class="acwejz0_o"/>`,
		"fallback": "openmoji:hand-with-fingers-splayed-medium-dark-skin-tone",
	});
}

export default Component;
