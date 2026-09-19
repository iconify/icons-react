import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4kagqb7c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4kagqb7c"/>`,
		"fallback": "glyphs:buildings-1",
	});
}

export default Component;
