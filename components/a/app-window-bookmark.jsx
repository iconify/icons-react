import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jy2jpyx9d.css';
import '../../css/g/ghmvgjdfp.css';
import '../../css/i/i2bkkzmma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jy2jpyx9d"/><path class="ghmvgjdfp"/><path class="i2bkkzmma"/></g>`,
		"fallback": "streamline-freehand:app-window-bookmark",
	});
}

export default Component;
