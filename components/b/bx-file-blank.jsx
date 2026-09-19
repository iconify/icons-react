import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsuqm5b8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsuqm5b8o"/>`,
		"fallback": "bx:bx-file-blank",
	});
}

export default Component;
