import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rnt9d7bbd.css';
import '../../css/s/s_zf5ubqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rnt9d7bbd"/><path class="s_zf5ubqn"/></g>`,
		"fallback": "streamline-freehand-color:design-tool-magic-wand",
	});
}

export default Component;
