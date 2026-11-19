import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d5j3vqxxv.css';
import '../../css/z/z7nhgab4n.css';
import '../../css/a/arsa_6bhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d5j3vqxxv"/><path class="z7nhgab4n"/><path class="arsa_6bhs"/></g>`,
		"fallback": "andrsrxn:connector",
	});
}

export default Component;
