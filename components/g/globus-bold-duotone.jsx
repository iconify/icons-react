import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnuscxboo.css';
import '../../css/o/o44bltb0y.css';
import '../../css/x/xuokrglbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="fnuscxboo"/><path class="o44bltb0y"/><path clip-rule="evenodd" class="xuokrglbz"/>`,
		"fallback": "solar:globus-bold-duotone",
	});
}

export default Component;
