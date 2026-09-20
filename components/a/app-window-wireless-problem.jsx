import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jywqcccww.css';
import '../../css/h/h8tqn3whx.css';
import '../../css/i/i6m4vqb5f.css';
import '../../css/c/c4-i9zhie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jywqcccww"/><path class="h8tqn3whx"/><path class="i6m4vqb5f"/><path class="c4-i9zhie"/></g>`,
		"fallback": "streamline-freehand-color:app-window-wireless-problem",
	});
}

export default Component;
