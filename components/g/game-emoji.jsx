import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/h/he2yosbpm.css';
import '../../css/n/nuzahtbll.css';
import '../../css/l/lvh9--bom.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="he2yosbpm"/><path class="nuzahtbll"/><path class="lvh9--bom"/></g>`,
		"fallback": "icon-park:game-emoji",
	});
}

export default Component;
