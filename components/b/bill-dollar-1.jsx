import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/i/ien4cgbpu.css';
import '../../css/j/j6u-dee6r.css';
import '../../css/n/nkq3pkbxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ien4cgbpu"/><path class="j6u-dee6r"/><path class="nkq3pkbxl"/></g>`,
		"fallback": "streamline-sharp-color:bill-dollar-1",
	});
}

export default Component;
