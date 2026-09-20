import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/peykzj6mu.css';
import '../../css/n/nft1ofbdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="peykzj6mu"/><path class="nft1ofbdy"/></g>`,
		"fallback": "tabler:device-cctv",
	});
}

export default Component;
