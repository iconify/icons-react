import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/krg250-ib.css';
import '../../css/c/c_9t11wpq.css';
import '../../css/v/vj0e7ab9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="krg250-ib"/><path class="c_9t11wpq"/><path class="vj0e7ab9i"/></g>`,
		"fallback": "andrsrxn:escalator-down",
	});
}

export default Component;
