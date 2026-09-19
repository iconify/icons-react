import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/u/ug3w78r_i.css';
import '../../css/n/nl7vp0j6c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="ug3w78r_i"/><path class="nl7vp0j6c"/></g>`,
		"fallback": "icon-park:bookshelf",
	});
}

export default Component;
