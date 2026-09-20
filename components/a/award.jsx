import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yoftwf7ei.css';
import '../../css/x/xwo-lz9mf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yoftwf7ei"/><path class="xwo-lz9mf"/></g>`,
		"fallback": "tabler:award",
	});
}

export default Component;
