import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayk_p8mde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayk_p8mde"/>`,
		"fallback": "mingcute:file-chart-line-fill",
	});
}

export default Component;
