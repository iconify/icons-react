import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oioeggbqi.css';
import '../../css/n/nwt30bbwd.css';
import '../../css/w/wq4mdib6y.css';
import '../../css/m/m18bd8w-e.css';
import '../../css/v/vshvrf3tz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oioeggbqi"/><path class="nwt30bbwd"/><path class="wq4mdib6y"/><path class="m18bd8w-e"/><path class="vshvrf3tz"/></g>`,
		"fallback": "solar:cart-large-3-bold",
	});
}

export default Component;
