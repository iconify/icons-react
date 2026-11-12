import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj6b63bfc.css';
import '../../css/j/jiywhnbij.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj6b63bfc"/><path class="jiywhnbij"/>`,
		"fallback": "selfhst:chibisafe-light",
	});
}

export default Component;
