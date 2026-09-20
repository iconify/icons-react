import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q8nc_j7iv.css';
import '../../css/f/f3_zbzb2t.css';
import '../../css/e/e5capmbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q8nc_j7iv"/><path class="f3_zbzb2t"/><path class="e5capmbka"/></g>`,
		"fallback": "tabler:home-bitcoin",
	});
}

export default Component;
