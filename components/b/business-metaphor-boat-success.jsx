import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gxpqwabxe.css';
import '../../css/m/mn-c1gvts.css';
import '../../css/d/d82kh5btl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gxpqwabxe"/><path class="mn-c1gvts"/><path class="d82kh5btl"/></g>`,
		"fallback": "streamline-freehand-color:business-metaphor-boat-success",
	});
}

export default Component;
