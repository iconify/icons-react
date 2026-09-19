import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/w/wgj2rd0lr.css';
import '../../css/k/kw7ez0beo.css';
import '../../css/w/wps6g-bwc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><rect class="wgj2rd0lr"/><rect class="kw7ez0beo"/><rect class="wps6g-bwc"/></g>`,
		"fallback": "icon-park:align-bottom-two",
	});
}

export default Component;
