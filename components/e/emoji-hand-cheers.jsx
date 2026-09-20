import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2m0onz5d.css';
import '../../css/a/a21q3s44z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x2m0onz5d"/><path class="a21q3s44z"/></g>`,
		"fallback": "streamline-freehand-color:emoji-hand-cheers",
	});
}

export default Component;
