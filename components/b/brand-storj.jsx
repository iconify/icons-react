import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pxhl7lpbj.css';
import '../../css/y/yhnin7b0y.css';
import '../../css/b/bix9qiwrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pxhl7lpbj"/><path class="yhnin7b0y"/><path class="bix9qiwrn"/></g>`,
		"fallback": "tabler:brand-storj",
	});
}

export default Component;
