import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wy6juxypy.css';
import '../../css/n/nerkymkii.css';
import '../../css/f/fyr67fbfm.css';
import '../../css/x/xrl1iyx7n.css';
import '../../css/v/v_guwch_g.css';
import '../../css/g/gluf0itsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wy6juxypy"/><path class="nerkymkii"/><path class="fyr67fbfm"/><path class="xrl1iyx7n"/><path class="v_guwch_g"/><path class="gluf0itsl"/></g>`,
		"fallback": "solar:flash-drive-line-duotone",
	});
}

export default Component;
