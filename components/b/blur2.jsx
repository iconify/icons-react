import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fi87dw9_i.css';
import '../../css/u/un8mbxbvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fi87dw9_i"/><path class="un8mbxbvy"/></g>`,
		"fallback": "reicon:blur2",
	});
}

export default Component;
