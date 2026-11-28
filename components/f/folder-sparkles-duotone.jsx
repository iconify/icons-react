import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ihk2pm2mr.css';
import '../../css/p/pexoee5qw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ihk2pm2mr secondary"/><path class="pexoee5qw primary"/></g>`,
		"fallback": "iconaut:folder-sparkles-duotone",
	});
}

export default Component;
