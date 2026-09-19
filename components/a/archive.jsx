import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu1nvub7w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu1nvub7w"/>`,
		"fallback": "glyphs:archive",
	});
}

export default Component;
