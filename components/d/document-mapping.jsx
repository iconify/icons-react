import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es7dcmbqd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es7dcmbqd"/>`,
		"fallback": "ix:document-mapping",
	});
}

export default Component;
