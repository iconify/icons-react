import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw62jpb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw62jpb0o"/>`,
		"fallback": "coolicons:copy-check-round",
	});
}

export default Component;
