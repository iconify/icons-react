import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xa25e2bcx.css';
import '../../css/y/y3v2ytjze.css';
import '../../css/v/vs-z1vb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xa25e2bcx"/><path class="y3v2ytjze"/><path class="vs-z1vb4f"/></g>`,
		"fallback": "keyline-icons:calendar-sparkles-two-tone",
	});
}

export default Component;
