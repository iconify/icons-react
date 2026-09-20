import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x0g82jaec.css';
import '../../css/p/pggas962f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x0g82jaec"/><path class="pggas962f"/></g>`,
		"fallback": "tabler:basket-pause",
	});
}

export default Component;
