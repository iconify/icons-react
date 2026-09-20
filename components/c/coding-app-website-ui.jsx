import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqtn154ri.css';
import '../../css/j/jet956q8h.css';
import '../../css/e/ehc2jfx_i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqtn154ri"/><path class="jet956q8h"/><path class="ehc2jfx_i"/>`,
		"fallback": "streamline-pixel:coding-app-website-ui",
	});
}

export default Component;
