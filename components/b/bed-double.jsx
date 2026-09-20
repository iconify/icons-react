import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz1l0whfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz1l0whfd"/>`,
		"fallback": "keyline-icons:bed-double",
	});
}

export default Component;
