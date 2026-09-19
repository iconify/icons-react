import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/n/nok-9wbgu.css';
import '../../css/f/f_1js0uww.css';
import '../../css/u/u_eetobob.css';
import '../../css/b/bbxcluyzs.css';
import '../../css/b/bs3iw2bus.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="nok-9wbgu"/><path class="f_1js0uww"/><path class="u_eetobob"/><path class="bbxcluyzs"/><path class="bs3iw2bus"/></g>`,
		"fallback": "icon-park:block-two",
	});
}

export default Component;
