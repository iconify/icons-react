import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp3n8fbra.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp3n8fbra"/>`,
		"fallback": "glyphs:hand-holding-dollar",
	});
}

export default Component;
