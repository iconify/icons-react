import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/le-z6_x1u.css';
import '../../css/z/z96np1bry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="le-z6_x1u"/><path class="z96np1bry"/></g>`,
		"fallback": "keyline-icons:diagram-successor-duotone",
	});
}

export default Component;
