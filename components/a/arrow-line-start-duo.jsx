import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t87l6hbgp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t87l6hbgp"/>`,
		"fallback": "glyphs:arrow-line-start-duo",
	});
}

export default Component;
