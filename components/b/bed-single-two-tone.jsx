import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lmzq-6n5j.css';
import '../../css/a/a8p4l9b4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lmzq-6n5j"/><path class="a8p4l9b4i"/></g>`,
		"fallback": "keyline-icons:bed-single-two-tone",
	});
}

export default Component;
