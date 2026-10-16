import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezhonm73e.css';
import '../../css/k/k2af-4bql.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezhonm73e"/><path class="k2af-4bql"/>`,
		"fallback": "energy-icons:grid-code-20",
	});
}

export default Component;
