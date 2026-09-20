import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f0vwz517z.css';
import '../../css/i/ir9d9ob2r.css';
import '../../css/a/alffxlipi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f0vwz517z"/><path class="ir9d9ob2r"/><path class="alffxlipi"/></g>`,
		"fallback": "lucide:building-complex-plus",
	});
}

export default Component;
