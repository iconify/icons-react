import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htkol23wy.css';
import '../../css/c/c682obb9l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htkol23wy"/><path class="c682obb9l"/>`,
		"fallback": "energy-icons:building-48",
	});
}

export default Component;
