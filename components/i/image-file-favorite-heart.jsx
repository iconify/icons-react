import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/if9l8bejy.css';
import '../../css/m/m0uafebbh.css';
import '../../css/e/eb8mxcbxa.css';
import '../../css/d/dsbbl1wrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="if9l8bejy"/><path class="m0uafebbh"/><path class="eb8mxcbxa"/><path class="dsbbl1wrr"/></g>`,
		"fallback": "streamline-freehand-color:image-file-favorite-heart",
	});
}

export default Component;
