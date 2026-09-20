import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/llaqktbzk.css';
import '../../css/h/h6uy-vbvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="llaqktbzk"/><path class="h6uy-vbvm"/></g>`,
		"fallback": "keyline-icons:graduation-cap-two-tone",
	});
}

export default Component;
