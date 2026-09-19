import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/c/c1gpvkbrp.css';
import '../../css/c/c_6hkr-8e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="c1gpvkbrp"/><path class="c_6hkr-8e"/></g>`,
		"fallback": "icon-park:good-two",
	});
}

export default Component;
