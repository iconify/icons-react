import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lg23rtbof.css';
import '../../css/t/tsp8w5b4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lg23rtbof"/><path class="tsp8w5b4l"/></g>`,
		"fallback": "keyline-icons:chevrons-up-down-duotone",
	});
}

export default Component;
