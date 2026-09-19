import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n3z40igbl.css';
import '../../css/z/zyv_r2dww.css';
import '../../css/p/pwr6saczv.css';
import '../../css/v/v9uf5bcgz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n3z40igbl"/><path class="zyv_r2dww"/><path class="pwr6saczv"/><path class="v9uf5bcgz"/></g>`,
		"fallback": "fluent-emoji-high-contrast:face-with-open-mouth",
	});
}

export default Component;
