import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/r35i2tbxi.css';
import '../../css/q/qthgv0dij.css';
import '../../css/i/i-7vcwsvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="r35i2tbxi"/><path class="qthgv0dij"/><path class="i-7vcwsvb"/></g>`,
		"fallback": "bitcoin-icons:car-outline",
	});
}

export default Component;
