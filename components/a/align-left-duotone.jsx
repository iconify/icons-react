import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zvz-c3bhf.css';
import '../../css/d/dz6h0q-mv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zvz-c3bhf"/><path class="dz6h0q-mv"/></g>`,
		"fallback": "keyline-icons:align-left-duotone",
	});
}

export default Component;
