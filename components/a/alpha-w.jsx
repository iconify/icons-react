import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2s99bc2o.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2s99bc2o"/>`,
		"fallback": "memory:alpha-w",
	});
}

export default Component;
