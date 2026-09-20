import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ntv3zqbfi.css';
import '../../css/d/dxkvnbgya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ntv3zqbfi"/><path class="dxkvnbgya"/></g>`,
		"fallback": "tabler:circle-open-arrow-left",
	});
}

export default Component;
