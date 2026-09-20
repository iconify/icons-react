import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/deeqkxq_k.css';
import '../../css/f/fbvfiepkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="deeqkxq_k"/><path class="fbvfiepkn"/></g>`,
		"fallback": "tabler:aspect-ratio-off",
	});
}

export default Component;
