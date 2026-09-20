import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dyt56wdhn.css';
import '../../css/o/oh8gi2b2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dyt56wdhn"/><path class="oh8gi2b2u"/></g>`,
		"fallback": "si:ai-edit-alt-1-duotone",
	});
}

export default Component;
