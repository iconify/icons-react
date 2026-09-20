import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ab4opy4ya.css';
import '../../css/r/rmy4jdb9m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ab4opy4ya"/><path clip-rule="evenodd" class="rmy4jdb9m"/></g>`,
		"fallback": "streamline-flex-color:cloud-off-flat",
	});
}

export default Component;
