import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lotkx1bkq.css';
import '../../css/o/oio_9tb1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lotkx1bkq"/><path class="oio_9tb1a"/></g>`,
		"fallback": "tdesign:caret-down",
	});
}

export default Component;
