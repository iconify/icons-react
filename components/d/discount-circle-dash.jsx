import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dbpjsxbaz.css';
import '../../css/m/mn_zsyb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dbpjsxbaz"/><path class="mn_zsyb9z"/></g>`,
		"fallback": "streamline-freehand-color:discount-circle-dash",
	});
}

export default Component;
