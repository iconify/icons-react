import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pu04orhkn.css';
import '../../css/b/bn9exubhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pu04orhkn"/><path class="bn9exubhn"/></g>`,
		"fallback": "streamline-sharp:ai-upscale-spark",
	});
}

export default Component;
