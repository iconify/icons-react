import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u3ij682cz.css';
import '../../css/e/e1hlvew7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="u3ij682cz"/><path class="e1hlvew7w"/></g>`,
		"fallback": "streamline-freehand-color:camera-settings-hand-motion",
	});
}

export default Component;
