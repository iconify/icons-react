import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fsazeubvv.css';
import '../../css/b/b6_19ubha.css';
import '../../css/a/a16lvcbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fsazeubvv"/><path class="b6_19ubha"/><path class="a16lvcbdc"/></g>`,
		"fallback": "hugeicons:console",
	});
}

export default Component;
