import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vvvbi4b4n.css';
import '../../css/f/fcamlgh9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vvvbi4b4n"/><path clip-rule="evenodd" class="fcamlgh9f"/></g>`,
		"fallback": "reicon:bell-ring-filled",
	});
}

export default Component;
