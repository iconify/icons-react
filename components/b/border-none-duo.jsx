import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx4291bta.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx4291bta"/>`,
		"fallback": "glyphs:border-none-duo",
	});
}

export default Component;
