import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyt2h3uvs.css';
import '../../css/z/zb43x5bxp.css';
import '../../css/m/mp27osukt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyt2h3uvs"/><path class="zb43x5bxp"/><path class="mp27osukt"/>`,
		"fallback": "energy-icons:hotel-20-bold",
	});
}

export default Component;
