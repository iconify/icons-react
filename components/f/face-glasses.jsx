import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itcfcoc3n.css';
import '../../css/b/bt9-2rbpz.css';
import '../../css/j/j060ffh-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="itcfcoc3n"/><circle transform="rotate(90 12 12)" class="bt9-2rbpz"/><path class="j060ffh-m"/></g>`,
		"fallback": "andrsrxn:face-glasses",
	});
}

export default Component;
