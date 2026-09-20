import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p2yirbl_t.css';
import '../../css/j/jb2it3bxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p2yirbl_t"/><path class="jb2it3bxa"/></g>`,
		"fallback": "keyline-icons:clock-arrow-down-two-tone",
	});
}

export default Component;
