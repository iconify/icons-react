import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yoa2pqbuc.css';
import '../../css/f/fn62c7q1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yoa2pqbuc"/><path clip-rule="evenodd" class="fn62c7q1z"/></g>`,
		"fallback": "reicon:house2-filled",
	});
}

export default Component;
