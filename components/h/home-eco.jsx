import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fj12aacni.css';
import '../../css/i/iqbjcwbwg.css';
import '../../css/v/v41nt6s4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fj12aacni"/><path class="iqbjcwbwg"/><path class="v41nt6s4e"/></g>`,
		"fallback": "tabler:home-eco",
	});
}

export default Component;
