import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xy54sia-t.css';
import '../../css/e/ekdlk7uqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xy54sia-t"/><path class="ekdlk7uqi"/></g>`,
		"fallback": "keyline-icons:clock-sparkles",
	});
}

export default Component;
