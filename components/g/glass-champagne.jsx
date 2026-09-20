import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z10yr7b2h.css';
import '../../css/n/nftobwoik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z10yr7b2h"/><path class="nftobwoik"/></g>`,
		"fallback": "tabler:glass-champagne",
	});
}

export default Component;
