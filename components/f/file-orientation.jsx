import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqcq3__zz.css';
import '../../css/c/cor7s8bfe.css';
import '../../css/g/gqduxdlfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hqcq3__zz"/><path class="cor7s8bfe"/><path class="gqduxdlfv"/></g>`,
		"fallback": "tabler:file-orientation",
	});
}

export default Component;
