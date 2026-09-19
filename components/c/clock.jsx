import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lmh4whbrs.css';
import '../../css/d/duag3ijzx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="lmh4whbrs"/><path class="duag3ijzx"/></g>`,
		"fallback": "bytesize:clock",
	});
}

export default Component;
