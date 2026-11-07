import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sszotns8l.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/u/ucxixg8jo.css';
import '../../css/r/rl4sfbcqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sszotns8l"/><g class="xtpeb-edw"><path class="ucxixg8jo"/><path class="rl4sfbcqv"/></g>`,
		"fallback": "solar:arrow-to-down-left-bold-duotone",
	});
}

export default Component;
