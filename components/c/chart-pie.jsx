import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/e/egeipg6gv.css';
import '../../css/g/ghy2e2bfl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="egeipg6gv"/><path class="ghy2e2bfl"/></g>`,
		"fallback": "icon-park:chart-pie",
	});
}

export default Component;
