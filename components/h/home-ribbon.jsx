import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r_hrkacfe.css';
import '../../css/f/fj12aacni.css';
import '../../css/n/n2hwc4qgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r_hrkacfe"/><path class="fj12aacni"/><path class="n2hwc4qgk"/></g>`,
		"fallback": "tabler:home-ribbon",
	});
}

export default Component;
