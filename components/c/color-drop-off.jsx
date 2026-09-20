import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a5azz_9_f.css';
import '../../css/t/t7jm-lbaz.css';
import '../../css/q/qtlrajbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a5azz_9_f"/><path class="t7jm-lbaz"/><path class="qtlrajbkl"/></g>`,
		"fallback": "streamline-freehand-color:color-drop-off",
	});
}

export default Component;
