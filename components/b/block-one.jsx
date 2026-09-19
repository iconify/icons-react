import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/b/bs3iw2bus.css';
import '../../css/f/f_1js0uww.css';
import '../../css/b/bo47x_htg.css';
import '../../css/c/c_t74dp4a.css';
import '../../css/b/bbxcluyzs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="bs3iw2bus"/><path class="f_1js0uww"/><path class="bo47x_htg"/><path class="c_t74dp4a"/><path class="bbxcluyzs"/></g>`,
		"fallback": "icon-park:block-one",
	});
}

export default Component;
