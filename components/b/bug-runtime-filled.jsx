import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me3enxbdz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="me3enxbdz"/>`,
		"fallback": "ix:bug-runtime-filled",
	});
}

export default Component;
