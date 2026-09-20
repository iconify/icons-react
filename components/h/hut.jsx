import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3i0g_bhl.css';
import '../../css/e/extwn3bgp.css';
import '../../css/x/xrmx3xz4e.css';
import '../../css/d/d5f39acby.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/n/n3qah61rv.css';
import '../../css/y/y28k0uf7f.css';
import '../../css/w/wq0oc2c1k.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3i0g_bhl"/><path class="extwn3bgp"/><path class="xrmx3xz4e"/><path class="d5f39acby"/><g class="jn8qy4bru"><path class="n3qah61rv"/><path class="y28k0uf7f"/><path class="wq0oc2c1k"/></g>`,
		"fallback": "openmoji:hut",
	});
}

export default Component;
