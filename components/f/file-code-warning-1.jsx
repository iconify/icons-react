import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pwpjv5bhc.css';
import '../../css/s/sx98n481k.css';
import '../../css/e/e2qt_5bqy.css';
import '../../css/x/xq45cg75b.css';
import '../../css/p/py5tbrbev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pwpjv5bhc"/><path class="sx98n481k"/><path class="e2qt_5bqy"/><path class="xq45cg75b"/><path class="py5tbrbev"/></g>`,
		"fallback": "streamline-freehand-color:file-code-warning-1",
	});
}

export default Component;
