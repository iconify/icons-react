import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih7wd8-4d.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih7wd8-4d"/>`,
		"fallback": "memory:alpha-c-fill",
	});
}

export default Component;
