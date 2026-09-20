import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ouby7sb8k.css';
import '../../css/q/qvw5nmb5l.css';
import '../../css/j/joc9-lbzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ouby7sb8k"/><path class="qvw5nmb5l"/><path class="joc9-lbzz"/></g>`,
		"fallback": "streamline-freehand-color:bookmarks-document",
	});
}

export default Component;
