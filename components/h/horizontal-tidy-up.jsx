import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/r/ravca3b4k.css';
import '../../css/k/kw7ez0beo.css';
import '../../css/p/pgl28ibim.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><rect class="ravca3b4k"/><rect class="kw7ez0beo"/><rect class="pgl28ibim"/></g>`,
		"fallback": "icon-park:horizontal-tidy-up",
	});
}

export default Component;
