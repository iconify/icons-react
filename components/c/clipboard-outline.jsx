import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br71gpb8p.css';
import '../../css/i/izu9akmqb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br71gpb8p"/><rect class="izu9akmqb"/>`,
		"fallback": "ion:clipboard-outline",
	});
}

export default Component;
