import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/c/cpev57b9n.css';
import '../../css/g/ghzm-wbvl.css';
import '../../css/t/twit_bb2y.css';
import '../../css/s/sxnqpdzkm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="cpev57b9n"/><path class="ghzm-wbvl"/><path class="twit_bb2y"/><path class="sxnqpdzkm"/></g>`,
		"fallback": "icon-park:block-four",
	});
}

export default Component;
