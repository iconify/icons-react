import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ap7xfoihm.css';
import '../../css/w/wkz8iolpx.css';
import '../../css/i/in9lr_b9l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ap7xfoihm"/><path clip-rule="evenodd" class="wkz8iolpx"/><path class="in9lr_b9l"/></g>`,
		"fallback": "streamline-flex-color:esports-flat",
	});
}

export default Component;
