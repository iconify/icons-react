import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhaitq0ho.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhaitq0ho"/>`,
		"fallback": "file-icons:adobe-aftereffects",
	});
}

export default Component;
