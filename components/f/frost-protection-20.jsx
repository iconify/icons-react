import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-myk9bcg.css';
import '../../css/w/wpelx51ac.css';
import '../../css/q/qpgkwijtd.css';
import '../../css/o/ow_cjkbpg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-myk9bcg"/><path class="wpelx51ac"/><path class="qpgkwijtd"/><path class="ow_cjkbpg"/>`,
		"fallback": "energy-icons:frost-protection-20",
	});
}

export default Component;
