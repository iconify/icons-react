import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h4gxwp8_i.css';
import '../../css/p/paja9tbpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h4gxwp8_i"/><path class="paja9tbpq"/></g>`,
		"fallback": "tabler:file-type-js",
	});
}

export default Component;
