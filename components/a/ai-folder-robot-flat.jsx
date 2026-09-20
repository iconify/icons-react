import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ern78-ehy.css';
import '../../css/f/fw0wa3b7e.css';
import '../../css/l/lbze0hblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ern78-ehy"/><path class="fw0wa3b7e"/><path class="lbze0hblg"/></g>`,
		"fallback": "streamline-sharp-color:ai-folder-robot-flat",
	});
}

export default Component;
