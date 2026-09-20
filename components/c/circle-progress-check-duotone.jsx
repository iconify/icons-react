import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wjk7vbbyo.css';
import '../../css/x/x6iouchpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wjk7vbbyo"/><path class="x6iouchpl"/></g>`,
		"fallback": "keyline-icons:circle-progress-check-duotone",
	});
}

export default Component;
