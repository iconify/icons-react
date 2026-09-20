import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wn_ne-bjp.css';
import '../../css/k/kjxp0tbtd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wn_ne-bjp"/><path class="kjxp0tbtd"/></g>`,
		"fallback": "streamline-color:dark-dislay-mode-flat",
	});
}

export default Component;
