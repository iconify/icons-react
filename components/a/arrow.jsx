import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymj5zhe8a.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymj5zhe8a"/>`,
		"fallback": "memory:arrow",
	});
}

export default Component;
