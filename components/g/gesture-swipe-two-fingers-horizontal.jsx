import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fln3agbft.css';
import '../../css/n/n1raacbmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fln3agbft"/><path class="n1raacbmz"/></g>`,
		"fallback": "streamline-freehand-color:gesture-swipe-two-fingers-horizontal",
	});
}

export default Component;
