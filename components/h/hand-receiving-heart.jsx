import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l2id3pbsd.css';
import '../../css/a/acxls8b1b.css';
import '../../css/u/umzkv9zji.css';
import '../../css/p/pkqaggb0i.css';
import '../../css/g/gjn9iyg8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l2id3pbsd"/><path class="acxls8b1b"/><rect class="umzkv9zji"/><path class="pkqaggb0i"/><rect class="gjn9iyg8t"/></g>`,
		"fallback": "andrsrxn:hand-receiving-heart",
	});
}

export default Component;
