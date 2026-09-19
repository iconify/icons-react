import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay2oc-bny.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay2oc-bny"/>`,
		"fallback": "fa7-solid:anchor-circle-exclamation",
	});
}

export default Component;
