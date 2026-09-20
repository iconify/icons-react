import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zm73-fbvt.css';
import '../../css/b/b9ew27brs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zm73-fbvt"/><path class="b9ew27brs"/></g>`,
		"fallback": "streamline-freehand:business-management-agreement",
	});
}

export default Component;
