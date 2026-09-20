import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q7ot8ryau.css';
import '../../css/a/alpsapn4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q7ot8ryau"/><path class="alpsapn4b"/></g>`,
		"fallback": "keyline-icons:arrow-up-wide-narrow-two-tone",
	});
}

export default Component;
