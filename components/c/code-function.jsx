import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luj_xzb3s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luj_xzb3s"/>`,
		"fallback": "ix:code-function",
	});
}

export default Component;
