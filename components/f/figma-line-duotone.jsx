import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mw9a2m02n.css';
import '../../css/a/a7_qblosi.css';
import '../../css/v/vgpahk0tv.css';
import '../../css/v/v2kjfgb-s.css';
import '../../css/j/jehd3zbqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mw9a2m02n"/><path class="a7_qblosi"/><path class="vgpahk0tv"/><path class="v2kjfgb-s"/><path class="jehd3zbqn"/></g>`,
		"fallback": "solar:figma-line-duotone",
	});
}

export default Component;
