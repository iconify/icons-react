import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amezjz6vh.css';
import '../../css/a/a1eidib9e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amezjz6vh"/><path class="a1eidib9e"/>`,
		"fallback": "ion:android-contact",
	});
}

export default Component;
