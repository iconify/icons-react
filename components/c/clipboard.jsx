import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oi1644chr.css';
import '../../css/a/a5godr4fn.css';
import '../../css/b/b2pw7wbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oi1644chr"/><path class="a5godr4fn"/><path class="b2pw7wbog"/></g>`,
		"fallback": "andrsrxn:clipboard",
	});
}

export default Component;
