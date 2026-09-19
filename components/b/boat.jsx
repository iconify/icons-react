import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gg44cuvkw.css';
import '../../css/p/pcxmaob_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gg44cuvkw"/><path class="pcxmaob_p"/></g>`,
		"fallback": "hugeicons:boat",
	});
}

export default Component;
