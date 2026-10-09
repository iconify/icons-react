import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qypcfebhs.css';
import '../../css/e/e8j_nwbgk.css';
import '../../css/b/by5qfxf8e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qypcfebhs"/><path class="e8j_nwbgk"/><path class="by5qfxf8e"/>`,
		"fallback": "energy-icons:garage-20",
	});
}

export default Component;
