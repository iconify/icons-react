import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvyjmfb4e.css';
import '../../css/f/fa_2iebty.css';
import '../../css/c/cdjguffgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xvyjmfb4e"/><path class="fa_2iebty"/><path class="cdjguffgb"/></g>`,
		"fallback": "streamline-freehand-color:filter",
	});
}

export default Component;
