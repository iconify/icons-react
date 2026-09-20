import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x4sq9-xnx.css';
import '../../css/g/g092g62sw.css';
import '../../css/h/hr5z6ac5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x4sq9-xnx"/><path class="g092g62sw"/><path class="hr5z6ac5i"/></g>`,
		"fallback": "tdesign:curtain",
	});
}

export default Component;
