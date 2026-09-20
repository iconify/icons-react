import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qmop-ib2u.css';
import '../../css/o/o9zq4rb9l.css';
import '../../css/j/jrlak1_qt.css';
import '../../css/r/rkogc9fcb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qmop-ib2u"/><path class="o9zq4rb9l"/><path clip-rule="evenodd" class="jrlak1_qt"/><path clip-rule="evenodd" class="rkogc9fcb"/></g>`,
		"fallback": "streamline-color:hotel-laundry-flat",
	});
}

export default Component;
