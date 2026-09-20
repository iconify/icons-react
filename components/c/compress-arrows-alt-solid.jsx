import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4m3nlfkd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4m3nlfkd"/>`,
		"fallback": "la:compress-arrows-alt-solid",
	});
}

export default Component;
