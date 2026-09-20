import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/ribl95bzm.css';
import '../../css/r/rndg4vhia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ribl95bzm"/><path class="rndg4vhia"/></g>`,
		"fallback": "streamline-freehand-color:email-action-download",
	});
}

export default Component;
