import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzfyu8bwp.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzfyu8bwp"/>`,
		"fallback": "memory:alpha-u-fill",
	});
}

export default Component;
