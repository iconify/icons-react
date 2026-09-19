import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/i/ipmfw8jim.css';
import '../../css/n/npkoh8bln.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="ipmfw8jim"/><path class="npkoh8bln"/></g>`,
		"fallback": "icon-park:five-star-badge",
	});
}

export default Component;
