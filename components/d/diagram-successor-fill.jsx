import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yeyl5c4iy.css';
import '../../css/z/z96np1bry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yeyl5c4iy"/><path class="z96np1bry"/></g>`,
		"fallback": "keyline-icons:diagram-successor-fill",
	});
}

export default Component;
