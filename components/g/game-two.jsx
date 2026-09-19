import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/e/e9i1fcj0j.css';
import '../../css/q/qpqb8x8mq.css';
import '../../css/c/c0l8x22zz.css';
import '../../css/y/yw_vmbbqx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="e9i1fcj0j"/><path class="qpqb8x8mq"/><path class="c0l8x22zz"/><path class="yw_vmbbqx"/></g>`,
		"fallback": "icon-park:game-two",
	});
}

export default Component;
