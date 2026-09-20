import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mu40a0bku.css';
import '../../css/f/faqhyyb6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mu40a0bku"/><path class="faqhyyb6c"/></g>`,
		"fallback": "streamline-freehand-color:gesture-zoom-in",
	});
}

export default Component;
