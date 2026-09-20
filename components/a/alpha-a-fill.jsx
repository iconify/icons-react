import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eam5p6x4d.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eam5p6x4d"/>`,
		"fallback": "memory:alpha-a-fill",
	});
}

export default Component;
