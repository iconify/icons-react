import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kduvb0e1b.css';
import '../../css/q/qbzdmcc2i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kduvb0e1b"/><path class="qbzdmcc2i"/>`,
		"fallback": "ion:document-attach",
	});
}

export default Component;
