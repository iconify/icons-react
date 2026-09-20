import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m934-mmey.css';
import '../../css/i/ilczlhb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m934-mmey"/><path class="ilczlhb7v"/></g>`,
		"fallback": "streamline-freehand-color:e-commerce-target-shopping-bag",
	});
}

export default Component;
