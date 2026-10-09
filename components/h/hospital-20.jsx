import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-z0-wtpr.css';
import '../../css/c/c2yq94b2t.css';
import '../../css/j/jwhg0sbfc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-z0-wtpr"/><path class="c2yq94b2t"/><path class="jwhg0sbfc"/>`,
		"fallback": "energy-icons:hospital-20",
	});
}

export default Component;
