import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/x4lzuxfnp.css';
import '../../css/o/od1m0pbpv.css';
import '../../css/y/y8z_0dbuj.css';
import '../../css/h/htjk3go1e.css';
import '../../css/a/a8zqczblx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="x4lzuxfnp"/><path class="od1m0pbpv"/><path class="y8z_0dbuj"/><path class="htjk3go1e"/><path class="a8zqczblx"/></g>`,
		"fallback": "icon-park:display",
	});
}

export default Component;
