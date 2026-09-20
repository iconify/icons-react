import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o66hdacmz.css';
import '../../css/v/v3_i21mvc.css';
import '../../css/h/hot5gjbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o66hdacmz"/><path class="v3_i21mvc"/><path class="hot5gjbrb"/></g>`,
		"fallback": "tabler:brand-solidjs",
	});
}

export default Component;
