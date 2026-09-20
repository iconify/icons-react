import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/azmk3ccdz.css';
import '../../css/y/y9e38dbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="azmk3ccdz"/><path class="y9e38dbof"/></g>`,
		"fallback": "tabler:brand-hbo",
	});
}

export default Component;
