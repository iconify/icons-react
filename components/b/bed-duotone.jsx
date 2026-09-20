import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jh83o49ny.css';
import '../../css/a/am3dasbmk.css';
import '../../css/e/eg1tj-bbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jh83o49ny"/><path clip-rule="evenodd" class="am3dasbmk"/><path class="eg1tj-bbg"/></g>`,
		"fallback": "keyline-icons:bed-duotone",
	});
}

export default Component;
