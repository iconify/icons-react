import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bwg8iac7g.css';
import '../../css/y/ydyrwi5zq.css';
import '../../css/v/va_c4z0bf.css';
import '../../css/g/g7814htnz.css';
import '../../css/d/d-96bpnfq.css';
import '../../css/k/kbbfvebiu.css';
import '../../css/y/yw-e3xrex.css';
import '../../css/u/uaipgpf-n.css';
import '../../css/f/fdao6sbyu.css';
import '../../css/d/d3_59sgxy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bwg8iac7g"/><path class="ydyrwi5zq"/><path class="va_c4z0bf"/><path class="g7814htnz"/><path class="d-96bpnfq"/><path class="kbbfvebiu"/><path class="yw-e3xrex"/><path class="uaipgpf-n"/><path class="fdao6sbyu"/><path class="d3_59sgxy"/></g>`,
		"fallback": "fluent-emoji-flat:house-with-garden",
	});
}

export default Component;
