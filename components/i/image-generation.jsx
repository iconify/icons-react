import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n_gsv3buj.css';
import '../../css/m/mx3kewvpy.css';
import '../../css/n/nxrf-56kt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n_gsv3buj"/><path class="mx3kewvpy"/><path class="nxrf-56kt"/></g>`,
		"fallback": "tabler:image-generation",
	});
}

export default Component;
