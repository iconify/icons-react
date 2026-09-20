import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gzo1x4baw.css';
import '../../css/h/hroqse4ny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gzo1x4baw"/><path class="hroqse4ny"/></g>`,
		"fallback": "lucide:armchair",
	});
}

export default Component;
