import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qk04f3blh.css';
import '../../css/f/f080jsesr.css';
import '../../css/s/sql18ebfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qk04f3blh"/><path class="f080jsesr"/><path class="sql18ebfm"/></g>`,
		"fallback": "streamline-freehand-color:creativity-idea-bulb",
	});
}

export default Component;
