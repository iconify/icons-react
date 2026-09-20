import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nb-40v-6s.css';
import '../../css/s/sds89e5-e.css';
import '../../css/l/l8lu4kgzj.css';
import '../../css/n/nkxvuvbyu.css';
import '../../css/e/elbxa7i0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nb-40v-6s"/><path class="sds89e5-e"/><path class="l8lu4kgzj"/><path class="nkxvuvbyu"/><path class="elbxa7i0i"/></g>`,
		"fallback": "solar:bomb-minimalistic-bold",
	});
}

export default Component;
