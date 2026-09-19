import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isz6hd-im.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isz6hd-im"/>`,
		"fallback": "academicons:ciencia-vitae-square",
	});
}

export default Component;
