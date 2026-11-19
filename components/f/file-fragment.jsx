import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ywdyv5y4d.css';
import '../../css/q/qxig-4dhw.css';
import '../../css/o/oh0g5bc-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ywdyv5y4d"/><path class="qxig-4dhw"/><path class="oh0g5bc-w"/></g>`,
		"fallback": "andrsrxn:file-fragment",
	});
}

export default Component;
