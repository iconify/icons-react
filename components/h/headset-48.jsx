import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm-p03j5f.css';
import '../../css/k/k57qbuvoz.css';
import '../../css/b/bwg7bobur.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm-p03j5f"/><path class="k57qbuvoz"/><path class="bwg7bobur"/>`,
		"fallback": "energy-icons:headset-48",
	});
}

export default Component;
