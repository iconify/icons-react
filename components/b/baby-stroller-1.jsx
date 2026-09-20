import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ec87c8bbk.css';
import '../../css/r/r85fyrbba.css';
import '../../css/w/w1bio80ht.css';
import '../../css/o/ol1teczqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ec87c8bbk"/><path class="r85fyrbba"/><path class="w1bio80ht"/><path class="ol1teczqd"/></g>`,
		"fallback": "streamline-cyber-color:baby-stroller-1",
	});
}

export default Component;
