import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j54vq3xxo.css';
import '../../css/b/bvuu-21tz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j54vq3xxo"/><path class="bvuu-21tz"/></g>`,
		"fallback": "tabler:charging-pile",
	});
}

export default Component;
