import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex-oqjthi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex-oqjthi"/>`,
		"fallback": "glyphs:fog-1",
	});
}

export default Component;
