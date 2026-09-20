import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dzqdu_3cy.css';
import '../../css/h/h2z41kbkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dzqdu_3cy"/><path class="h2z41kbkn"/></g>`,
		"fallback": "streamline-sharp-color:arrow-cursor-move-flat",
	});
}

export default Component;
