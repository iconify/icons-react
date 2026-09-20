import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o8xyjsxxv.css';
import '../../css/l/l33ser1xl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o8xyjsxxv"/><path class="l33ser1xl"/></g>`,
		"fallback": "streamline-freehand-color:disability-down-syndrome-ribbon",
	});
}

export default Component;
