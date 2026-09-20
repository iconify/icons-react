import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syb3c432m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="syb3c432m"/>`,
		"fallback": "ix:cam-track",
	});
}

export default Component;
