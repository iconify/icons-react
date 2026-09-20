import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zz5v2cz1e.css';
import '../../css/r/rv21ked8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zz5v2cz1e"/><path class="rv21ked8o"/></g>`,
		"fallback": "streamline-freehand-color:currency-euro-bubble",
	});
}

export default Component;
