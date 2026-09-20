import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/umw-n-b3y.css';
import '../../css/a/asv-ulbqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="umw-n-b3y"/><path class="asv-ulbqk"/></g>`,
		"fallback": "keyline-icons:airplay-two-tone",
	});
}

export default Component;
