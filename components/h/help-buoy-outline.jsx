import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnii4hccr.css';
import '../../css/s/sozjgdcyd.css';
import '../../css/x/xfox-b84f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="rnii4hccr"/><circle class="sozjgdcyd"/><path class="xfox-b84f"/>`,
		"fallback": "famicons:help-buoy-outline",
	});
}

export default Component;
