import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xny50ibfn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xny50ibfn"/>`,
		"fallback": "selfhst:ergo-dark",
	});
}

export default Component;
