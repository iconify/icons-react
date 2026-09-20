import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fjcrk-bvh.css';
import '../../css/t/tjxsnyqog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fjcrk-bvh"/><path class="tjxsnyqog"/></g>`,
		"fallback": "streamline-freehand-color:grid-snap-magnet",
	});
}

export default Component;
