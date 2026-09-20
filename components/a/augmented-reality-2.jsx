import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ywusfwepd.css';
import '../../css/c/cm12huumn.css';
import '../../css/z/z597y8bfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ywusfwepd"/><path class="cm12huumn"/><path class="z597y8bfi"/></g>`,
		"fallback": "tabler:augmented-reality-2",
	});
}

export default Component;
