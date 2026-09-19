import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/g/gh2q01cwc.css';
import '../../css/a/a8pybib1r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="gh2q01cwc"/><path class="a8pybib1r"/></g>`,
		"fallback": "icon-park:bad-two",
	});
}

export default Component;
