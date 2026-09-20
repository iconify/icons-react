import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zem31bbhr.css';
import '../../css/u/uceiz7brp.css';
import '../../css/c/cuez0r58z.css';
import '../../css/y/ypgfjgbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zem31bbhr"/><path class="uceiz7brp"/><path class="cuez0r58z"/><path class="ypgfjgbdk"/></g>`,
		"fallback": "solar:container-line-duotone",
	});
}

export default Component;
