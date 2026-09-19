import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9mhcml7k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9mhcml7k"/>`,
		"fallback": "si-glyph:brush-2",
	});
}

export default Component;
