import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/c/c5z8ne86d.css';
import '../../css/y/y06nxiblq.css';
import '../../css/o/o5wfiqbxv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><rect class="c5z8ne86d"/><rect class="y06nxiblq"/><rect class="o5wfiqbxv"/></g>`,
		"fallback": "icon-park:align-right-two",
	});
}

export default Component;
