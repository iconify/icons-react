import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u728x1lfi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u728x1lfi"/>`,
		"fallback": "ix:battery-bolt",
	});
}

export default Component;
