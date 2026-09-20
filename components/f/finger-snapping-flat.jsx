import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ek1y-e54g.css';
import '../../css/l/lo6nbnb_s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ek1y-e54g"/><path class="lo6nbnb_s"/></g>`,
		"fallback": "streamline-flex-color:finger-snapping-flat",
	});
}

export default Component;
