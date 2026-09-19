import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/h/hz_qsuwka.css';
import '../../css/d/dj487cy_p.css';
import '../../css/w/wano3i20j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><circle class="hz_qsuwka"/><circle class="dj487cy_p"/><circle class="wano3i20j"/></g>`,
		"fallback": "icon-park:bubble-chart",
	});
}

export default Component;
