import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgfx4-byf.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgfx4-byf"/>`,
		"fallback": "fluent-mdl2:area-chart",
	});
}

export default Component;
