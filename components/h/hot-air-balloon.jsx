import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjvf77dtp.css';
import '../../css/a/az3ychbkk.css';
import '../../css/a/asxw-il9i.css';
import '../../css/f/f4tgi5b5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rjvf77dtp"/><path class="az3ychbkk"/><rect class="asxw-il9i"/><ellipse class="f4tgi5b5k"/></g>`,
		"fallback": "andrsrxn:hot-air-balloon",
	});
}

export default Component;
