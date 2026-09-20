import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wqtr1tb9d.css';
import '../../css/a/ao4fn1b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wqtr1tb9d"/><path class="ao4fn1b9j"/></g>`,
		"fallback": "tabler:armchair-2",
	});
}

export default Component;
