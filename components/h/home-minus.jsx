import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rgyzf88xz.css';
import '../../css/g/gj0ui5c7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rgyzf88xz"/><path class="gj0ui5c7d"/></g>`,
		"fallback": "tabler:home-minus",
	});
}

export default Component;
