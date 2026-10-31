import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sperd-qmw.css';
import '../../css/v/viz_352cz.css';
import '../../css/r/r8owxqjhe.css';
import '../../css/q/qawkimhao.css';
import '../../css/d/ddj4t94hd.css';
import '../../css/w/wx2u-i2yf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sperd-qmw wm-shadow"/><path class="viz_352cz"/><path class="r8owxqjhe"/><path class="qawkimhao"/><path class="ddj4t94hd"/><path class="wx2u-i2yf"/></g>`,
		"fallback": "withicons-retro:certificate",
	});
}

export default Component;
