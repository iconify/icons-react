import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tkse8qeon.css';
import '../../css/r/rf1to2b4w.css';
import '../../css/l/lnwew2bga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tkse8qeon"/><path class="rf1to2b4w"/><path class="lnwew2bga"/></g>`,
		"fallback": "andrsrxn:brush",
	});
}

export default Component;
