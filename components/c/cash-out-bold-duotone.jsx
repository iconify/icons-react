import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/u/uokp1hb7l.css';
import '../../css/o/o8t6onbpn.css';
import '../../css/t/tx735kbhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="uokp1hb7l"/><path class="o8t6onbpn"/></g><path class="tx735kbhs"/>`,
		"fallback": "solar:cash-out-bold-duotone",
	});
}

export default Component;
