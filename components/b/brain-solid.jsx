import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exjne1qug.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exjne1qug"/>`,
		"fallback": "la:brain-solid",
	});
}

export default Component;
