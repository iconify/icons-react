import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f3wc8sb1h.css';
import '../../css/x/xv5gd-bdo.css';
import '../../css/y/y3cq-bcda.css';
import '../../css/j/jd-0ep1mv.css';
import '../../css/m/mit2hfbug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f3wc8sb1h"/><path class="xv5gd-bdo"/><path class="y3cq-bcda"/><path class="jd-0ep1mv"/><path class="mit2hfbug"/></g>`,
		"fallback": "andrsrxn:church",
	});
}

export default Component;
