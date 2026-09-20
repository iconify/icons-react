import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tvcsmybba.css';
import '../../css/t/t1c71cjft.css';
import '../../css/h/hr1rg6bkc.css';
import '../../css/t/t66l_ccom.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tvcsmybba"/><path class="t1c71cjft"/><path class="hr1rg6bkc"/><path class="t66l_ccom"/></g>`,
		"fallback": "streamline-color:fist",
	});
}

export default Component;
