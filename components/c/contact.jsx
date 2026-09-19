import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vckfm4x5y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vckfm4x5y"/>`,
		"fallback": "cil:contact",
	});
}

export default Component;
