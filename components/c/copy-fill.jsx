import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bx4fqnbwk.css';
import '../../css/o/o7rgvpb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bx4fqnbwk"/><path class="o7rgvpb-h"/></g>`,
		"fallback": "keyline-icons:copy-fill",
	});
}

export default Component;
