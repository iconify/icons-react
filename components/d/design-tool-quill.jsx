import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kj0apeb4d.css';
import '../../css/k/k17g33t1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kj0apeb4d"/><path class="k17g33t1f"/></g>`,
		"fallback": "streamline-freehand:design-tool-quill",
	});
}

export default Component;
