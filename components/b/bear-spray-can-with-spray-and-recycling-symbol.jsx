import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yprrdym3v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yprrdym3v"/>`,
		"fallback": "pinhead:bear-spray-can-with-spray-and-recycling-symbol",
	});
}

export default Component;
