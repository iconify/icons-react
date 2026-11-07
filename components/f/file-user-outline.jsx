import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bw6emnz6t.css';
import '../../css/r/rys5boesx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bw6emnz6t"/><path class="rys5boesx"/></g>`,
		"fallback": "solar:file-user-outline",
	});
}

export default Component;
