import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgc5zx1ng.css';
import '../../css/n/nhjw1v7mw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pgc5zx1ng"/><path class="nhjw1v7mw"/></g>`,
		"fallback": "streamline-color:call-center-support-service-flat",
	});
}

export default Component;
