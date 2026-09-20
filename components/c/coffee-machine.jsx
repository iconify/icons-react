import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/xeib-6g1x.css';
import '../../css/u/uk-s-y9pi.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="xeib-6g1x"/><path class="uk-s-y9pi"/></g>`,
		"fallback": "marketeq:coffee-machine",
	});
}

export default Component;
