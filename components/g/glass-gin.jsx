import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gd6xzyj5j.css';
import '../../css/c/cl0dc-bek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gd6xzyj5j"/><path class="cl0dc-bek"/></g>`,
		"fallback": "tabler:glass-gin",
	});
}

export default Component;
