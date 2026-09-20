import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmy7jtbal.css';
import '../../css/z/zaiufn24c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmy7jtbal"/><path class="zaiufn24c"/>`,
		"fallback": "selfhst:chatgpt",
	});
}

export default Component;
