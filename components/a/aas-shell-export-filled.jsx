import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5t9f007a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5t9f007a"/>`,
		"fallback": "ix:aas-shell-export-filled",
	});
}

export default Component;
