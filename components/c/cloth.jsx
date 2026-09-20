import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osa6iacrl.css';
import '../../css/v/vv3o_rb-m.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osa6iacrl"/><path class="vv3o_rb-m"/>`,
		"fallback": "temaki:cloth",
	});
}

export default Component;
