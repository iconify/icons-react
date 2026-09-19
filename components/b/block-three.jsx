import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/c/czxm18bbc.css';
import '../../css/t/ttmeqib-o.css';
import '../../css/c/cpev57b9n.css';
import '../../css/g/ghzm-wbvl.css';
import '../../css/t/twit_bb2y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="czxm18bbc"/><path class="ttmeqib-o"/><path class="cpev57b9n"/><path class="ghzm-wbvl"/><path class="twit_bb2y"/></g>`,
		"fallback": "icon-park:block-three",
	});
}

export default Component;
