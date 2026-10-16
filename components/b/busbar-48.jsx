import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4gy22yti.css';
import '../../css/c/cbaaq0d-t.css';
import '../../css/c/cts63qbra.css';
import '../../css/h/hs7fcr1fi.css';
import '../../css/n/nms2e1b_x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4gy22yti"/><path class="cbaaq0d-t"/><path class="cts63qbra"/><path class="hs7fcr1fi"/><path class="nms2e1b_x"/>`,
		"fallback": "energy-icons:busbar-48",
	});
}

export default Component;
