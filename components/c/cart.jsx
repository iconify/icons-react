import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mr9mvfbsp.css';
import '../../css/i/incllrbwl.css';
import '../../css/e/e2lc3dbws.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mr9mvfbsp"/><circle class="incllrbwl"/><circle class="e2lc3dbws"/></g>`,
		"fallback": "bytesize:cart",
	});
}

export default Component;
