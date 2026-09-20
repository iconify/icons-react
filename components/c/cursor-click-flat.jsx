import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lu31-bber.css';
import '../../css/u/uw-dabcsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lu31-bber"/><path class="uw-dabcsx"/></g>`,
		"fallback": "streamline-sharp-color:cursor-click-flat",
	});
}

export default Component;
