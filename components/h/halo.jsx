import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfcpgc_6v.css';

const viewBox = {"width":1024,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfcpgc_6v"/>`,
		"fallback": "whh:halo",
	});
}

export default Component;
