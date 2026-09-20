import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n_gsv3buj.css';
import '../../css/m/mx3kewvpy.css';
import '../../css/h/h_nyhbbhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n_gsv3buj"/><path class="mx3kewvpy"/><path class="h_nyhbbhu"/></g>`,
		"fallback": "tabler:brush",
	});
}

export default Component;
