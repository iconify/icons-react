import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gnk727bol.css';
import '../../css/a/adb-d-jid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gnk727bol"/><path class="adb-d-jid"/></g>`,
		"fallback": "andrsrxn:highlighter",
	});
}

export default Component;
