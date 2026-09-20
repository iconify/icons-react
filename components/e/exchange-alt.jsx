import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0_rdmbhk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0_rdmbhk"/>`,
		"fallback": "la:exchange-alt",
	});
}

export default Component;
