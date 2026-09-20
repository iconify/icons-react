import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i6ken2b7v.css';
import '../../css/a/agal0ib3d.css';
import '../../css/p/pymdlybof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i6ken2b7v"/><path class="agal0ib3d"/><path class="pymdlybof"/></g>`,
		"fallback": "streamline-cyber-color:cloud",
	});
}

export default Component;
