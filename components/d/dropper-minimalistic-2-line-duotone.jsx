import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yvr49nc7e.css';
import '../../css/g/gswougl7d.css';
import '../../css/z/zj48ghuwd.css';
import '../../css/g/gsg0iibdv.css';
import '../../css/l/l3-5vrb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yvr49nc7e"/><path class="gswougl7d"/><path class="zj48ghuwd"/><path class="gsg0iibdv"/><path class="l3-5vrb9h"/></g>`,
		"fallback": "solar:dropper-minimalistic-2-line-duotone",
	});
}

export default Component;
