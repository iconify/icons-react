import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j63z_zbvn.css';
import '../../css/r/r4f-rbb3p.css';
import '../../css/h/h62bf9bvi.css';
import '../../css/z/ze4atpuqd.css';
import '../../css/p/pn1-79m2m.css';
import '../../css/n/nu1qkhykl.css';
import '../../css/v/vjp-8vq4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j63z_zbvn"/><path class="r4f-rbb3p"/><path class="h62bf9bvi"/><path class="ze4atpuqd"/><path class="pn1-79m2m"/><path class="nu1qkhykl"/><path class="vjp-8vq4r"/></g>`,
		"fallback": "hugeicons:hierarchy",
	});
}

export default Component;
