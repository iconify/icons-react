import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/q/q97o_r-5j.css';
import '../../css/b/b5kg96bcb.css';
import '../../css/g/g-r-l4bpp.css';
import '../../css/z/zomcnnb8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><ellipse class="q97o_r-5j"/><path class="b5kg96bcb"/><path class="g-r-l4bpp"/><path class="zomcnnb8u"/></g>`,
		"fallback": "icon-park:data-all",
	});
}

export default Component;
