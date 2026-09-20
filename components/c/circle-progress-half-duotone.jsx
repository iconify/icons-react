import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wjk7vbbyo.css';
import '../../css/r/r3ta8vl-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wjk7vbbyo"/><path class="r3ta8vl-m"/></g>`,
		"fallback": "keyline-icons:circle-progress-half-duotone",
	});
}

export default Component;
