import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leuc6mo5x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="leuc6mo5x"/>`,
		"fallback": "ix:circle",
	});
}

export default Component;
