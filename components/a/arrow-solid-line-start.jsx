import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9oya2dhl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9oya2dhl"/>`,
		"fallback": "glyphs:arrow-solid-line-start",
	});
}

export default Component;
