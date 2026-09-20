import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g70whwsdk.css';
import '../../css/c/c7--g1yoy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g70whwsdk"/><path class="c7--g1yoy"/></g>`,
		"fallback": "keyline-icons:badge-check-duotone",
	});
}

export default Component;
