import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juul3ub7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juul3ub7m"/>`,
		"fallback": "tabler:external-link-filled",
	});
}

export default Component;
