import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/skurl8bms.css';
import '../../css/i/i22c82bof.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="skurl8bms"/><path class="i22c82bof"/></g>`,
		"fallback": "bytesize:creditcard",
	});
}

export default Component;
