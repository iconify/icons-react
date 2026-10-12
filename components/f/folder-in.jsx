import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbmslsw0u.css';
import '../../css/o/o8v4ohk9d.css';
import '../../css/b/ba2k-sb7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rbmslsw0u"/><path class="o8v4ohk9d"/><path class="ba2k-sb7w"/></g>`,
		"fallback": "andrsrxn:folder-in",
	});
}

export default Component;
