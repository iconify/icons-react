import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/p/pg6h54d7a.css';
import '../../css/c/c05-njb-e.css';
import '../../css/r/rbbbhnbqi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="pg6h54d7a"/><rect class="c05-njb-e"/><rect class="rbbbhnbqi"/></g>`,
		"fallback": "icon-park:helmet-one",
	});
}

export default Component;
