import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk-3pyb8k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk-3pyb8k"/>`,
		"fallback": "glyphs:badge-duo",
	});
}

export default Component;
