import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wdy1l4pbn.css';
import '../../css/n/nnenslb6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wdy1l4pbn"/><path class="nnenslb6m"/></g>`,
		"fallback": "tdesign:application",
	});
}

export default Component;
