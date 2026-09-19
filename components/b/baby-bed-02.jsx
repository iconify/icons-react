import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/ryzs-efko.css';
import '../../css/v/vm6i8hwdu.css';
import '../../css/w/w276c4mco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ryzs-efko"/><path class="vm6i8hwdu"/><path class="w276c4mco"/></g>`,
		"fallback": "hugeicons:baby-bed-02",
	});
}

export default Component;
