import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmi96sb7k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmi96sb7k"/>`,
		"fallback": "la:bullseye-solid",
	});
}

export default Component;
