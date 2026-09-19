import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x21ylpbbz.css';
import '../../css/s/sz8gcyb-v.css';
import '../../css/g/gg44cuvkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x21ylpbbz"/><path class="sz8gcyb-v"/><path class="gg44cuvkw"/></g>`,
		"fallback": "hugeicons:ferry-boat",
	});
}

export default Component;
