import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ni-5t0otd.css';
import '../../css/o/o7653n1ex.css';
import '../../css/v/vs-z1vb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ni-5t0otd"/><path class="o7653n1ex"/><path class="vs-z1vb4f"/></g>`,
		"fallback": "keyline-icons:handbag-sparkles-duotone",
	});
}

export default Component;
