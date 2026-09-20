import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv46m4fcb.css';
import '../../css/u/uwe5bpeob.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv46m4fcb"/><path class="uwe5bpeob"/>`,
		"fallback": "streamline-pixel:ecology-plant-growth-soil-nature",
	});
}

export default Component;
