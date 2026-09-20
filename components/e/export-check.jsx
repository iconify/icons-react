import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swcuh7m3r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="swcuh7m3r"/>`,
		"fallback": "ix:export-check",
	});
}

export default Component;
