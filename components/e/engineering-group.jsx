import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4k-vfb0q.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4k-vfb0q"/>`,
		"fallback": "fluent-mdl2:engineering-group",
	});
}

export default Component;
