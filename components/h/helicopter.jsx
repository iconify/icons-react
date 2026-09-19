import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5ws6he8x.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5ws6he8x"/>`,
		"fallback": "fa-solid:helicopter",
	});
}

export default Component;
