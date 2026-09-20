import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/plcny0byk.css';
import '../../css/t/tyz8ybc-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="plcny0byk"/><path class="tyz8ybc-r"/></g>`,
		"fallback": "tabler:copy-filled",
	});
}

export default Component;
