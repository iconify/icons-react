import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/tm40wxbko.css';
import '../../css/p/pmzx7qbms.css';
import '../../css/x/x_71-s_ta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="tm40wxbko"/><path class="pmzx7qbms"/><path class="x_71-s_ta"/></g>`,
		"fallback": "matita:beta",
	});
}

export default Component;
