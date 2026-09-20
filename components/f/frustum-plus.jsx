import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/exk4wibjo.css';
import '../../css/v/vs10wab7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="exk4wibjo"/><path class="vs10wab7f"/></g>`,
		"fallback": "tabler:frustum-plus",
	});
}

export default Component;
