import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/thon2yb-t.css';
import '../../css/x/xzwsp87vr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="thon2yb-t"/><path class="xzwsp87vr"/></g>`,
		"fallback": "tabler:camera-ai",
	});
}

export default Component;
