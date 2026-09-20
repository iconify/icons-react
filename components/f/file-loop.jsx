import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a5vx24o9r.css';
import '../../css/u/uzp5_6bsa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="a5vx24o9r"/><path class="uzp5_6bsa"/></g>`,
		"fallback": "pepicons-pencil:file-loop",
	});
}

export default Component;
