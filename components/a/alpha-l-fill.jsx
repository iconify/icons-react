import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dds2i6bod.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dds2i6bod"/>`,
		"fallback": "memory:alpha-l-fill",
	});
}

export default Component;
