import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4fb692lb.css';
import '../../css/d/dyswrnwah.css';
import '../../css/a/aei68za6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c4fb692lb"/><path class="dyswrnwah"/><path class="aei68za6c"/></g>`,
		"fallback": "andrsrxn:file-x",
	});
}

export default Component;
