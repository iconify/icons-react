import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr8u1glpl.css';
import '../../css/h/h4erxx0-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr8u1glpl"/><path class="h4erxx0-o"/>`,
		"fallback": "bx:bxl-algolia",
	});
}

export default Component;
