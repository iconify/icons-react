import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vnw5jbcnp.css';
import '../../css/j/j4jx0sbkj.css';
import '../../css/m/makbbdc0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vnw5jbcnp"/><path class="j4jx0sbkj"/><path class="makbbdc0j"/></g>`,
		"fallback": "streamline-freehand-color:donation-charity-donate-heart-flower",
	});
}

export default Component;
