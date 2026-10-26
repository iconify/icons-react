import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n18e1sb2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n18e1sb2x"/>`,
		"fallback": "cbi:affine",
	});
}

export default Component;
