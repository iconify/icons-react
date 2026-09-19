import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oarvw2vhq.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oarvw2vhq"/>`,
		"fallback": "fluent-mdl2:focal-point",
	});
}

export default Component;
