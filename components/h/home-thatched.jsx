import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pat2y4biv.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pat2y4biv"/>`,
		"fallback": "memory:home-thatched",
	});
}

export default Component;
