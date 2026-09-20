import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zkbga2bms.css';
import '../../css/i/i2qezbnqp.css';
import '../../css/q/q8wbu63xu.css';
import '../../css/d/dvxkj65od.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(2 2)" class="bi12bsetm"><g class="zkbga2bms"><circle class="i2qezbnqp"/><path class="q8wbu63xu"/></g><circle class="dvxkj65od"/></g>`,
		"fallback": "system-uicons:info-circle",
	});
}

export default Component;
