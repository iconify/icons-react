import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dqgo5wbxe.css';
import '../../css/b/b6to_c51m.css';
import '../../css/m/m390b8qby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dqgo5wbxe"/><path class="b6to_c51m"/><path class="m390b8qby"/></g>`,
		"fallback": "solar:clipboard-heart-linear",
	});
}

export default Component;
