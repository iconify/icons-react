import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a2gk_pb7g.css';
import '../../css/w/w32gfz6zt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="a2gk_pb7g"/><path class="w32gfz6zt"/></g>`,
		"fallback": "keyline-icons:circles-two-tone",
	});
}

export default Component;
