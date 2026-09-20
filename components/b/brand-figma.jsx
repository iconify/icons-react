import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/izh9zg4zu.css';
import '../../css/f/fsq3pk_py.css';
import '../../css/r/rqap60bcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="izh9zg4zu"/><path class="fsq3pk_py"/><path class="rqap60bcx"/></g>`,
		"fallback": "tabler:brand-figma",
	});
}

export default Component;
