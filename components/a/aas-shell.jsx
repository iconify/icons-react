import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu3syowcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu3syowcu"/>`,
		"fallback": "ix:aas-shell",
	});
}

export default Component;
