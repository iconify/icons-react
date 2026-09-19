import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/u/u_eetobob.css';
import '../../css/n/nok-9wbgu.css';
import '../../css/c/c_t74dp4a.css';
import '../../css/l/lewwhobzy.css';
import '../../css/f/f_1js0uww.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="u_eetobob"/><path class="nok-9wbgu"/><path class="c_t74dp4a"/><path class="lewwhobzy"/><path class="f_1js0uww"/></g>`,
		"fallback": "icon-park:block-eight",
	});
}

export default Component;
