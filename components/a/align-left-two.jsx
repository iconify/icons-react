import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/l/li3mw6bcq.css';
import '../../css/y/y06nxiblq.css';
import '../../css/v/v_qzst-mc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><rect class="li3mw6bcq"/><rect class="y06nxiblq"/><rect class="v_qzst-mc"/></g>`,
		"fallback": "icon-park:align-left-two",
	});
}

export default Component;
