import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/f/f1b8dob7c.css';
import '../../css/y/y06nxiblq.css';
import '../../css/h/hng779tvz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><rect class="f1b8dob7c"/><rect class="y06nxiblq"/><rect class="hng779tvz"/></g>`,
		"fallback": "icon-park:align-vertical-center-two",
	});
}

export default Component;
