import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/d/d3cup7bqo.css';
import '../../css/t/t0y2n_ocl.css';
import '../../css/q/qizly-baw.css';
import '../../css/k/ka34n31sy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="d3cup7bqo"/><path class="t0y2n_ocl"/><path class="qizly-baw"/><path class="ka34n31sy"/></g>`,
		"fallback": "icon-park:block-nine",
	});
}

export default Component;
