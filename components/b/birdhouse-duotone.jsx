import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j8w7egbwh.css';
import '../../css/p/pjr250j9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j8w7egbwh"/><path clip-rule="evenodd" class="pjr250j9m"/></g>`,
		"fallback": "lucide-extended:birdhouse-duotone",
	});
}

export default Component;
