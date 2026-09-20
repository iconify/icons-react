import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/koo359vaz.css';
import '../../css/j/jnaj9-8_f.css';
import '../../css/u/ua_8dab4r.css';
import '../../css/p/pu5j3xbce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="koo359vaz"/><path class="jnaj9-8_f"/><path class="ua_8dab4r"/><path class="pu5j3xbce"/></g>`,
		"fallback": "solar:git-diff-line-duotone",
	});
}

export default Component;
