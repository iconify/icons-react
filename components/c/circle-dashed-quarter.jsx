import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i3ri9tbis.css';
import '../../css/l/lidcpw1ys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i3ri9tbis"/><path class="lidcpw1ys"/></g>`,
		"fallback": "keyline-icons:circle-dashed-quarter",
	});
}

export default Component;
