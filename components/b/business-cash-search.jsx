import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/ppuq-jbby.css';
import '../../css/p/pq748ll6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ppuq-jbby"/><path class="pq748ll6j"/></g>`,
		"fallback": "streamline-freehand-color:business-cash-search",
	});
}

export default Component;
