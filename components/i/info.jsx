import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t5su3hb9j.css';
import '../../css/l/lmh4whbrs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t5su3hb9j"/><circle class="lmh4whbrs"/></g>`,
		"fallback": "bytesize:info",
	});
}

export default Component;
