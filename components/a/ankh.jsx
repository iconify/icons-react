import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm5z_rb9f.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm5z_rb9f"/>`,
		"fallback": "fa-solid:ankh",
	});
}

export default Component;
