import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/czat0q-qi.css';
import '../../css/h/hkpwmqo7k.css';
import '../../css/m/m6yu4qj4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="czat0q-qi"/><path clip-rule="evenodd" class="hkpwmqo7k"/><path class="m6yu4qj4x"/></g>`,
		"fallback": "reicon:camera-add-duotone",
	});
}

export default Component;
