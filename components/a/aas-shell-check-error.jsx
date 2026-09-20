import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvypm0e2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvypm0e2e"/>`,
		"fallback": "ix:aas-shell-check-error",
	});
}

export default Component;
