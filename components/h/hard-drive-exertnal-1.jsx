import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dpguzym1f.css';
import '../../css/s/s73komb4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dpguzym1f"/><path class="s73komb4z"/></g>`,
		"fallback": "streamline-freehand-color:hard-drive-exertnal-1",
	});
}

export default Component;
