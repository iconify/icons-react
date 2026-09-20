import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/po169iqid.css';
import '../../css/u/u4479eb3g.css';
import '../../css/l/l85g3udky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="po169iqid"/><path class="u4479eb3g"/><path class="l85g3udky"/></g>`,
		"fallback": "lucide:croissant",
	});
}

export default Component;
