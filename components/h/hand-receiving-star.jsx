import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/umzkv9zji.css';
import '../../css/w/wnk23tbno.css';
import '../../css/p/pkqaggb0i.css';
import '../../css/g/gjn9iyg8t.css';
import '../../css/y/y593d8bcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="umzkv9zji"/><path class="wnk23tbno"/><path class="pkqaggb0i"/><rect class="gjn9iyg8t"/><path class="y593d8bcl"/></g>`,
		"fallback": "andrsrxn:hand-receiving-star",
	});
}

export default Component;
