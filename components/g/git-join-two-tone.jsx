import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/edstwtszr.css';
import '../../css/t/teqqe-b2q.css';
import '../../css/w/w69u3mbnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="edstwtszr"/><path class="teqqe-b2q"/><path class="w69u3mbnt"/></g>`,
		"fallback": "keyline-icons:git-join-two-tone",
	});
}

export default Component;
