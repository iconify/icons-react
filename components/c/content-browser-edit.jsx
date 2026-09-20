import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wo3nysb6d.css';
import '../../css/w/wu3ejwblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wo3nysb6d"/><path class="wu3ejwblt"/></g>`,
		"fallback": "streamline-freehand:content-browser-edit",
	});
}

export default Component;
