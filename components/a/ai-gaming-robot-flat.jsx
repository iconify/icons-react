import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c-afv9q-c.css';
import '../../css/x/x5fefv7uq.css';
import '../../css/g/g_aicbc-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="c-afv9q-c"/><path class="x5fefv7uq"/><path class="g_aicbc-f"/></g>`,
		"fallback": "streamline-sharp-color:ai-gaming-robot-flat",
	});
}

export default Component;
