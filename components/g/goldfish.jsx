import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pju8r0ixf.css';
import '../../css/e/e-dgl9b9u.css';
import '../../css/u/uopoqacav.css';
import '../../css/s/sb6v-00if.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pju8r0ixf"/><path class="e-dgl9b9u"/><path class="uopoqacav"/><circle class="sb6v-00if"/>`,
		"fallback": "openmoji:goldfish",
	});
}

export default Component;
