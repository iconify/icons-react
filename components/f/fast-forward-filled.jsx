import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh5ri3jtd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uh5ri3jtd"/>`,
		"fallback": "ix:fast-forward-filled",
	});
}

export default Component;
