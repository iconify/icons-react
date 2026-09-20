import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ia92s9b8y.css';
import '../../css/j/jd5857_ex.css';
import '../../css/n/n1cxkybip.css';
import '../../css/n/npw8u-bon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ia92s9b8y"/><path class="jd5857_ex"/><path class="n1cxkybip"/><path class="npw8u-bon"/></g>`,
		"fallback": "tdesign:castle-6",
	});
}

export default Component;
