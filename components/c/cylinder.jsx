import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/ezwev1bob.css';
import '../../css/y/yhit36cnb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ezwev1bob"/><path class="yhit36cnb"/></g>`,
		"fallback": "icon-park-solid:cylinder",
	});
}

export default Component;
