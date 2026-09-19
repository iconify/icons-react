import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebldvkbho.css';
import '../../css/z/zcicxlhte.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebldvkbho"/><path class="zcicxlhte"/>`,
		"fallback": "ei:exclamation",
	});
}

export default Component;
