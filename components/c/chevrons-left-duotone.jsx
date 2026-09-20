import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lu-sdh82m.css';
import '../../css/b/b0q94rbrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lu-sdh82m"/><path class="b0q94rbrm"/></g>`,
		"fallback": "keyline-icons:chevrons-left-duotone",
	});
}

export default Component;
