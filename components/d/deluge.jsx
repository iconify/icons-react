import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dif6p1bms.css';
import '../../css/u/u1-7rbomv.css';
import '../../css/s/smgw8kb-o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dif6p1bms"/><path class="u1-7rbomv"/><path class="smgw8kb-o"/>`,
		"fallback": "selfhst:deluge",
	});
}

export default Component;
