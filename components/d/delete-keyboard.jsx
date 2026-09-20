import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/wbuxfxb-u.css';
import '../../css/o/oeuuu8bxf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="wbuxfxb-u"/><path class="oeuuu8bxf"/></g>`,
		"fallback": "streamline-plump:delete-keyboard",
	});
}

export default Component;
