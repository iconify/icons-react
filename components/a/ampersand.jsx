import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l6e0xdb9u.css';
import '../../css/z/z-0ig2bma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l6e0xdb9u"/><path class="z-0ig2bma"/></g>`,
		"fallback": "andrsrxn:ampersand",
	});
}

export default Component;
