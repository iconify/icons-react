import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks0oxbcgz.css';
import '../../css/x/xzejhphye.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks0oxbcgz"/><path class="xzejhphye"/>`,
		"fallback": "energy-icons:flag-triangle-20",
	});
}

export default Component;
