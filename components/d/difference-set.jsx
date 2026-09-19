import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/j/jg8uifn_h.css';
import '../../css/c/clthf6bcq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="jg8uifn_h"/><path class="clthf6bcq"/></g>`,
		"fallback": "icon-park:difference-set",
	});
}

export default Component;
