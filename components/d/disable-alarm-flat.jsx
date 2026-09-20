import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ab7q5buxt.css';
import '../../css/p/ppy8_gqzr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ab7q5buxt"/><path clip-rule="evenodd" class="ppy8_gqzr"/></g>`,
		"fallback": "streamline-plump-color:disable-alarm-flat",
	});
}

export default Component;
