import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eidx1vlbr.css';
import '../../css/y/ytum9sbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eidx1vlbr"/><path class="ytum9sbfn"/></g>`,
		"fallback": "keyline-icons:film-sparkles",
	});
}

export default Component;
