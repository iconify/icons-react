import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhkq5mf7j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhkq5mf7j"/>`,
		"fallback": "glyphs:canoe",
	});
}

export default Component;
