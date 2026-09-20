import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g74650lzz.css';
import '../../css/f/fej3jhoxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g74650lzz"/><path class="fej3jhoxo"/></g>`,
		"fallback": "reicon:dropper-filled",
	});
}

export default Component;
