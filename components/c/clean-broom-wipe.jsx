import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/j/j62viqdqg.css';
import '../../css/m/mwkfl3bqa.css';
import '../../css/p/pf5ms_6ak.css';
import '../../css/x/xycpfho1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="j62viqdqg"/><path class="mwkfl3bqa"/><path class="pf5ms_6ak"/><path class="xycpfho1r"/></g>`,
		"fallback": "streamline-sharp-color:clean-broom-wipe",
	});
}

export default Component;
