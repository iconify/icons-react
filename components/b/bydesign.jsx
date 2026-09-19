import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/i/ivq8eifjo.css';
import '../../css/k/k0q4p2byh.css';
import '../../css/o/oigysqpni.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="ivq8eifjo"/><path class="k0q4p2byh"/><path class="oigysqpni"/></g>`,
		"fallback": "icon-park:bydesign",
	});
}

export default Component;
