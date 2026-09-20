import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj0q8nbko.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj0q8nbko"/>`,
		"fallback": "la:bug",
	});
}

export default Component;
