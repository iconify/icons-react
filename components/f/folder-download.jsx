import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/efktenb0c.css';
import '../../css/o/ox86_nbmj.css';
import '../../css/e/eek3jy32c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="efktenb0c"/><path class="ox86_nbmj"/><path class="eek3jy32c"/></g>`,
		"fallback": "andrsrxn:folder-download",
	});
}

export default Component;
