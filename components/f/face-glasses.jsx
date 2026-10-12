import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itcfcoc3n.css';
import '../../css/b/bt9-2rbpz.css';
import '../../css/k/knku8o1_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="itcfcoc3n"/><circle transform="rotate(90 12 12)" class="bt9-2rbpz"/><path class="knku8o1_h"/></g>`,
		"fallback": "andrsrxn:face-glasses",
	});
}

export default Component;
