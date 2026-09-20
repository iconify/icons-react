import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ntu5fobtp.css';
import '../../css/y/y20x_t7fb.css';
import '../../css/u/u7i3azblb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ntu5fobtp"/><path clip-rule="evenodd" class="y20x_t7fb"/><path class="u7i3azblb"/></g>`,
		"fallback": "streamline-plump-color:announcement-megaphone-flat",
	});
}

export default Component;
