import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lys6u4jad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lys6u4jad"/>`,
		"fallback": "noviair-light:book",
	});
}

export default Component;
