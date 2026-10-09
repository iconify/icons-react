import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs75gccsu.css';
import '../../css/l/leqhccbhf.css';
import '../../css/e/e9wm7acuv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs75gccsu"/><path class="leqhccbhf"/><path class="e9wm7acuv"/>`,
		"fallback": "energy-icons:demand-response-48",
	});
}

export default Component;
