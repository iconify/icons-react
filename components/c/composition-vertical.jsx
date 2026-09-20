import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zjd1m9bze.css';
import '../../css/l/lw9k0lx9f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zjd1m9bze"/><path class="lw9k0lx9f"/></g>`,
		"fallback": "streamline-color:composition-vertical",
	});
}

export default Component;
