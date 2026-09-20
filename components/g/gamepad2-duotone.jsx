import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gnf97kb7s.css';
import '../../css/v/vyr6bpb5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gnf97kb7s"/><path class="vyr6bpb5b"/></g>`,
		"fallback": "reicon:gamepad2-duotone",
	});
}

export default Component;
