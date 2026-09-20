import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eio-gbbes.css';
import '../../css/n/no4wsvg0e.css';
import '../../css/f/f09yx3rvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eio-gbbes"/><path class="no4wsvg0e"/><path class="f09yx3rvc"/></g>`,
		"fallback": "tdesign:arrow-up-down-circle",
	});
}

export default Component;
