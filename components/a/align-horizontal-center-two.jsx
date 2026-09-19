import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/g/gegxdc6-d.css';
import '../../css/k/kw7ez0beo.css';
import '../../css/i/ip_q_kbgm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><rect class="gegxdc6-d"/><rect class="kw7ez0beo"/><rect class="ip_q_kbgm"/></g>`,
		"fallback": "icon-park:align-horizontal-center-two",
	});
}

export default Component;
