import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd05r9bdf.css';
import '../../css/k/k0hxhqbwo.css';
import '../../css/r/ralef_bab.css';
import '../../css/z/zqhekobbq.css';
import '../../css/h/hb1lhlb1y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd05r9bdf"/><path class="k0hxhqbwo"/><circle class="ralef_bab"/><path class="zqhekobbq"/><path class="hb1lhlb1y"/>`,
		"fallback": "selfhst:figma",
	});
}

export default Component;
