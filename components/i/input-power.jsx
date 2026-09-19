import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pun54bbsp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pun54bbsp"/>`,
		"fallback": "cil:input-power",
	});
}

export default Component;
