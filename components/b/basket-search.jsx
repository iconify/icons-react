import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mbg6g-bqe.css';
import '../../css/e/enfvn1y8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mbg6g-bqe"/><path class="enfvn1y8r"/></g>`,
		"fallback": "tabler:basket-search",
	});
}

export default Component;
