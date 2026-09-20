import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q96y6lb5p.css';
import '../../css/i/i6c9o8b8h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="q96y6lb5p"/><path class="i6c9o8b8h"/></g>`,
		"fallback": "streamline-plump-color:hierarchy-1-flat",
	});
}

export default Component;
