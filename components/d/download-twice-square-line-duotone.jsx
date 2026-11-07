import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qx4kgzb8b.css';
import '../../css/b/b8qhiqbyw.css';
import '../../css/y/yho9nxbfe.css';
import '../../css/l/lxnzn9nmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qx4kgzb8b"/><path class="b8qhiqbyw"/><path class="yho9nxbfe"/><path class="lxnzn9nmw"/></g>`,
		"fallback": "solar:download-twice-square-line-duotone",
	});
}

export default Component;
