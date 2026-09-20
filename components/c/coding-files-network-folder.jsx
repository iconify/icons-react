import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x3ra-pn6i.css';
import '../../css/y/yx33g_bbf.css';
import '../../css/h/hzwio7bqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="x3ra-pn6i"/><path class="yx33g_bbf"/><path class="hzwio7bqu"/></g>`,
		"fallback": "streamline-freehand-color:coding-files-network-folder",
	});
}

export default Component;
