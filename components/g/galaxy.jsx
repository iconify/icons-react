import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vjcy62scu.css';
import '../../css/g/ge41bcbfk.css';
import '../../css/r/rwu-zqbjw.css';
import '../../css/f/fso9qw86u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="vjcy62scu"/><path class="ge41bcbfk"/><circle class="rwu-zqbjw"/><path class="fso9qw86u"/></g>`,
		"fallback": "andrsrxn:galaxy",
	});
}

export default Component;
