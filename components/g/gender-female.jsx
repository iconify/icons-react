import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bfnhaupzo.css';
import '../../css/e/e61_its-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bfnhaupzo"/><path class="e61_its-h"/></g>`,
		"fallback": "tdesign:gender-female",
	});
}

export default Component;
