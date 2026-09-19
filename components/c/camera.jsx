import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v8z-nko1c.css';
import '../../css/s/shaguj4ln.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v8z-nko1c"/><circle class="shaguj4ln"/></g>`,
		"fallback": "bytesize:camera",
	});
}

export default Component;
