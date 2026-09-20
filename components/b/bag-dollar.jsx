import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c-1m7bbgv.css';
import '../../css/a/ape4g2lco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c-1m7bbgv"/><path class="ape4g2lco"/></g>`,
		"fallback": "streamline-sharp:bag-dollar",
	});
}

export default Component;
