import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ocos3pbek.css';
import '../../css/w/w3q_ipbhq.css';
import '../../css/a/a8_4ybjwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ocos3pbek"/><path class="w3q_ipbhq"/><path class="a8_4ybjwp"/></g>`,
		"fallback": "tdesign:dam-4",
	});
}

export default Component;
