import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m11hndscw.css';
import '../../css/q/q8lgdjbkc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m11hndscw"/><path class="q8lgdjbkc"/></g>`,
		"fallback": "codicon:file-symlink-file",
	});
}

export default Component;
