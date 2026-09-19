import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vvfp7h0oo.css';
import '../../css/l/lg4joxb9h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vvfp7h0oo"/><circle class="lg4joxb9h"/></g>`,
		"fallback": "icon-park:eagle",
	});
}

export default Component;
