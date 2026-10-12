import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bzbeewbxs.css';
import '../../css/g/gbxayccpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bzbeewbxs"/><path class="gbxayccpw"/></g>`,
		"fallback": "andrsrxn:book-dashed",
	});
}

export default Component;
