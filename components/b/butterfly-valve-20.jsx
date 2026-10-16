import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5dxwccjh.css';
import '../../css/k/kej-obbqo.css';
import '../../css/n/n-e5m9_wm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5dxwccjh"/><path class="kej-obbqo"/><path class="n-e5m9_wm"/>`,
		"fallback": "energy-icons:butterfly-valve-20",
	});
}

export default Component;
