import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/j977qfbyx.css';
import '../../css/g/gvqncouol.css';
import '../../css/g/gmlya5hur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="j977qfbyx"/><path class="gvqncouol"/><path class="gmlya5hur"/></g>`,
		"fallback": "bitcoin-icons:credit-card-outline",
	});
}

export default Component;
