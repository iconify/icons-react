import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3rydq38c.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3rydq38c"/>`,
		"fallback": "fa-solid:angry",
	});
}

export default Component;
