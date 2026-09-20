import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onocauoox.css';
import '../../css/l/lpwvf4b-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onocauoox"/><path class="lpwvf4b-h"/>`,
		"fallback": "mingcute:fingerprint-fill",
	});
}

export default Component;
