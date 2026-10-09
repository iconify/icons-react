import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-o60sb2m.css';
import '../../css/l/lr2ntzbjp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-o60sb2m"/><path class="lr2ntzbjp"/>`,
		"fallback": "energy-icons:ammonia-48",
	});
}

export default Component;
