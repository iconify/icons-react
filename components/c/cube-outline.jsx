import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no18gackv.css';
import '../../css/e/e9f-1ebjm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no18gackv"/><path class="e9f-1ebjm"/>`,
		"fallback": "famicons:cube-outline",
	});
}

export default Component;
